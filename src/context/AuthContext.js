"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const refreshProfile = useCallback(async () => {
    if (!user) return;
    try {
      const token = await user.getIdToken();
      const res = await fetch("/api/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setProfile(data.profile);
      } else {
        setProfile(null);
      }
    } catch {
      setProfile(null);
    }
  }, [user]);

  useEffect(() => {
    let cancelled = false;

    if (!auth) {
      queueMicrotask(() => {
        if (!cancelled) setLoading(false);
      });
      return;
    }

    const unsub = onAuthStateChanged(auth, async (u) => {
      if (cancelled) return;
      setUser(u);
      if (u) {
        let profileData = null;
        for (let attempt = 0; attempt < 3; attempt++) {
          try {
            const token = await u.getIdToken();
            const res = await fetch("/api/profile", {
              headers: { Authorization: `Bearer ${token}` },
              cache: "no-store",
            });
            if (res.ok) {
              const data = await res.json();
              profileData = data?.profile ?? null;
              if (profileData) break;
            }
          } catch {
            // retry below
          }
          if (attempt < 2) await new Promise((r) => setTimeout(r, 800));
        }
        if (!cancelled) setProfile(profileData);
      } else {
        setProfile(null);
      }
      if (!cancelled) setLoading(false);
    });

    return () => {
      cancelled = true;
      unsub();
    };
  }, []);

  const logout = useCallback(async () => {
    if (auth) {
      try {
        await signOut(auth);
      } catch {
        // ignore
      }
    }
    setProfile(null);
    setUser(null);
  }, []);

  const value = { user, profile, loading, logout, refreshProfile };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

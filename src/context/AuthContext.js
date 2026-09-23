"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

const AuthContext = createContext(null);

const DEMO_ACCOUNTS = {
  graduate: {
    uid: "brian.demo@spacemakers.app",
    email: "brian.demo@spacemakers.app",
    displayName: "Brian Otieno (Graduate)",
  },
  employer: {
    uid: "eatery.demo@spacemakers.app",
    email: "eatery.demo@spacemakers.app",
    displayName: "Mama Njeri's Eatery (Employer)",
  },
  admin: {
    uid: "admin.spacemakers@spacemakers.app",
    email: "admin.spacemakers@spacemakers.app",
    displayName: "SpaceMakers Admin",
  },
};

function createMockFirebaseUser(account) {
  return {
    uid: account.uid || account.email,
    email: account.email,
    displayName: account.displayName || account.name || account.email,
    getIdToken: async () => account.uid || account.email,
  };
}

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

    // First check local storage for demo session
    try {
      const savedDemo = localStorage.getItem("spacemakers_demo_user");
      if (savedDemo) {
        const parsed = JSON.parse(savedDemo);
        const mockUser = createMockFirebaseUser(parsed);
        (async () => {
          try {
            if (!cancelled) setUser(mockUser);
            const token = await mockUser.getIdToken();
            const res = await fetch("/api/profile", {
              headers: { Authorization: `Bearer ${token}` },
              cache: "no-store",
            });
            if (res.ok) {
              const data = await res.json();
              if (!cancelled) setProfile(data?.profile ?? null);
            }
          } catch (e) {
            console.warn("Failed to fetch demo profile:", e);
          } finally {
            if (!cancelled) setLoading(false);
          }
        })();
        return;
      }
    } catch {
      // ignore
    }

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

  const loginAsDemo = useCallback(async (roleOrEmail) => {
    setLoading(true);
    let account = DEMO_ACCOUNTS[roleOrEmail];
    if (!account) {
      // Find by email or role string
      account = Object.values(DEMO_ACCOUNTS).find(
        (a) => a.email.toLowerCase() === String(roleOrEmail).toLowerCase(),
      ) || {
        uid: `demo_${roleOrEmail}`,
        email: roleOrEmail.includes("@") ? roleOrEmail : `${roleOrEmail}@spacemakers.app`,
        displayName: roleOrEmail,
      };
    }

    const mockUser = createMockFirebaseUser(account);
    try {
      localStorage.setItem("spacemakers_demo_user", JSON.stringify(account));
    } catch {
      // ignore
    }
    setUser(mockUser);

    try {
      const token = await mockUser.getIdToken();
      const res = await fetch("/api/profile", {
        headers: { Authorization: `Bearer ${token}` },
        cache: "no-store",
      });
      if (res.ok) {
        const data = await res.json();
        setProfile(data?.profile ?? null);
      }
    } catch (err) {
      console.warn("Error fetching demo profile:", err);
    } finally {
      setLoading(false);
    }
    return mockUser;
  }, []);

  const logout = useCallback(async () => {
    try {
      localStorage.removeItem("spacemakers_demo_user");
    } catch {
      // ignore
    }
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

  const value = { user, profile, loading, logout, refreshProfile, loginAsDemo };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

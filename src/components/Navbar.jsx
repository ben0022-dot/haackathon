"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import styles from "./Navbar.module.css";

const LINKS = [
  { href: "/dashboard", label: "Home" },
  { href: "/opportunities", label: "Opportunities" },
  { href: "/applications", label: "Applications" },
  { href: "/profile", label: "Profile" },
];

export default function Navbar() {
  const { user, profile, logout, loading } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const isEmployer = profile?.role === "EMPLOYER";
  const isAdmin = profile?.role === "ADMIN";

  function handleLogout() {
    logout();
    router.push("/");
  }

  if (loading) {
    return <nav className={styles.nav}><div className={styles.navInner}><span className={styles.brand}>SpaceMakers</span></div></nav>;
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.navInner}>
        <Link href="/" className={styles.brand}>
          Space<span className={styles.brandAccent}>Makers</span>
        </Link>

        <button
          type="button"
          className={styles.hamburger}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>

        <div className={`${styles.links} ${open ? styles.linksOpen : ""}`}>
          {user && (
            <Link
              href={isEmployer ? "/employer" : isAdmin ? "/admin" : "/dashboard"}
              className={pathname === "/dashboard" || pathname.startsWith("/employer") || pathname.startsWith("/admin") ? styles.activeLink : undefined}
            >
              Home
            </Link>
          )}
          {user && (
            <Link
              href="/opportunities"
              className={pathname.startsWith("/opportunities") ? styles.activeLink : undefined}
            >
              Opportunities
            </Link>
          )}
          {user && (
            <Link
              href="/applications"
              className={pathname.startsWith("/applications") ? styles.activeLink : undefined}
            >
              Applications
            </Link>
          )}
          {user && (
            <Link
              href="/profile"
              className={pathname.startsWith("/profile") ? styles.activeLink : undefined}
            >
              Profile
            </Link>
          )}

          {user && (isEmployer || isAdmin) && (
            <Link href="/employer/opportunities/new" className={styles.postLink}>
              Post Opportunity
            </Link>
          )}

          {!user ? (
            <>
              <Link href="/login" className={styles.loginLink}>Log in</Link>
              <Link href="/signup" className={styles.signupLink}>Sign up</Link>
            </>
          ) : (
            <button type="button" onClick={handleLogout} className={styles.logoutButton}>
              Log out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
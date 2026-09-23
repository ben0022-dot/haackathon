"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import styles from "./Navbar.module.css";
import {
  Sparkles,
  Compass,
  Briefcase,
  LayoutDashboard,
  User,
  LogIn,
  LogOut,
  PlusCircle,
  FileText,
} from "lucide-react";

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

  const dashboardHref = isEmployer
    ? "/employer"
    : isAdmin
    ? "/admin"
    : "/dashboard";

  const isDashboardActive =
    pathname === "/dashboard" ||
    pathname.startsWith("/employer") ||
    pathname.startsWith("/admin");

  if (loading) {
    return (
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <Link href="/" className={styles.brand}>
            Space<span className={styles.brandAccent}>Makers</span>
          </Link>
        </div>
      </nav>
    );
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.navInner}>
        {/* Brand Logo -> Always to Landing Page */}
        <Link href="/" className={styles.brand}>
          <span>Space<span className={styles.brandAccent}>Makers</span></span>
        </Link>

        {/* Hamburger button for mobile devices */}
        <button
          type="button"
          className={styles.hamburger}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>

        {/* Navigation links drawer / bar */}
        <div
          className={`${styles.links} ${open ? styles.linksOpen : ""}`}
          onClick={() => setOpen(false)}
        >
          {/* Primary Navigation Hub */}
          <div className={styles.navGroup}>
            {/* Landing / Home Page */}
            <Link
              href="/"
              className={pathname === "/" ? styles.activeLink : undefined}
            >
              Home
            </Link>

            {/* Opportunities Directory */}
            <Link
              href="/opportunities"
              className={
                pathname.startsWith("/opportunities") &&
                !pathname.includes("/new")
                  ? styles.activeLink
                  : undefined
              }
            >
              <Briefcase size={15} />
              <span>Opportunities</span>
            </Link>

            {/* Interactive Demand Map */}
            <Link
              href="/demand-map"
              className={
                pathname.startsWith("/demand-map") ? styles.activeLink : undefined
              }
            >
              <Compass size={15} />
              <span>Demand Map</span>
            </Link>

            {/* Dedicated Dashboard */}
            <Link
              href={user ? dashboardHref : "/dashboard"}
              className={isDashboardActive ? styles.activeLink : undefined}
            >
              <LayoutDashboard size={15} />
              <span>Dashboard</span>
            </Link>

            {/* AI Career & Trade Suite */}
            <Link
              href="/ai"
              className={
                pathname.startsWith("/ai") ? styles.activeLink : undefined
              }
              style={{
                color: pathname.startsWith("/ai")
                  ? "var(--primary-dark)"
                  : undefined,
              }}
            >
              <Sparkles size={14} color="var(--primary)" />
              <span>AI Suite</span>
            </Link>

            {/* Authenticated-only sublinks: Applications & Profile */}
            {user && (
              <>
                <Link
                  href="/applications"
                  className={
                    pathname.startsWith("/applications")
                      ? styles.activeLink
                      : undefined
                  }
                >
                  <FileText size={15} />
                  <span>Applications</span>
                </Link>

                <Link
                  href="/profile"
                  className={
                    pathname.startsWith("/profile")
                      ? styles.activeLink
                      : undefined
                  }
                >
                  <User size={15} />
                  <span>Profile</span>
                </Link>
              </>
            )}
          </div>

          {/* Account Authentication & Action Group */}
          <div className={styles.authGroup}>
            {user && (isEmployer || isAdmin) && (
              <Link
                href="/employer/opportunities/new"
                className={styles.postLink}
              >
                <PlusCircle size={15} />
                <span>Post Gig</span>
              </Link>
            )}

            {!user ? (
              <>
                <Link href="/login" className={styles.loginLink}>
                  <LogIn size={15} />
                  <span>Sign In</span>
                </Link>
                <Link href="/signup" className={styles.signupLink}>
                  <span>Get Started</span>
                </Link>
              </>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                <div className={styles.userBadge}>
                  <span>{profile?.name ? profile.name.split(" ")[0] : "User"}</span>
                  <span className={styles.roleTag}>
                    {isEmployer ? "Employer" : isAdmin ? "Admin" : "Artisan"}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleLogout}
                  className={styles.logoutButton}
                  title="Sign out of account"
                >
                  <LogOut size={15} />
                  <span>Sign Out</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

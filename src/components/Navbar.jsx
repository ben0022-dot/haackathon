"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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

const PRIMARY_LINKS = [
  { href: "/", label: "Home", icon: null },
  { href: "/opportunities", label: "Opportunities", icon: Briefcase },
  { href: "/demand-map", label: "Demand Map", icon: Compass },
  { href: "/ai", label: "AI Suite", icon: Sparkles },
];

const USER_LINKS = [
  { href: "/applications", label: "Applications", icon: FileText },
  { href: "/profile", label: "Profile", icon: User },
];

const DESKTOP_BREAKPOINT = 860;

function isActive(href, pathname) {
  if (href === "/") return pathname === "/";
  if (href === "/opportunities") {
    return pathname.startsWith("/opportunities") && !pathname.includes("/new");
  }
  return pathname.startsWith(href);
}

export default function Navbar() {
  const { user, profile, logout, loading } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  const isEmployer = profile?.role === "EMPLOYER";
  const isAdmin = profile?.role === "ADMIN";

  const dashboardHref = isEmployer
    ? "/employer"
    : isAdmin
    ? "/admin"
    : "/dashboard";

  const isDashboardActive =
    pathname === "/dashboard" ||
    pathname.startsWith("/employer") ||
    pathname.startsWith("/admin");

  const [open, setOpen] = useState(false);
  const drawerRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= DESKTOP_BREAKPOINT) setOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const { overflow: previousOverflow } = document.body.style;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setOpen(false);
        hamburgerRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !drawerRef.current) return;

      const focusable = Array.from(
        drawerRef.current.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => el.offsetParent !== null);

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    drawerRef.current?.querySelector("a, button")?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  async function handleLogout() {
    await logout();
    router.push("/");
  }

  if (loading) {
    return (
      <nav className={styles.nav} aria-label="Primary navigation">
        <div className={styles.navInner}>
          <Link href="/" className={styles.brand}>
<Image
              src="/spacemakers.png"
              alt="SpaceMakers"
              width={38}
              height={38}
              priority
              className={styles.brandLogo}
            />
          </Link>
          <div className={styles.navSkeleton} aria-hidden="true" />
        </div>
      </nav>
    );
  }

  const navItems = [
    ...PRIMARY_LINKS,
    ...(user ? [{ href: dashboardHref, label: "Dashboard", icon: LayoutDashboard }] : []),
  ];

  const isNavItemActive = (href) =>
    href === dashboardHref ? isDashboardActive : isActive(href, pathname);

  return (
    <nav className={styles.nav} aria-label="Primary navigation">
      <div className={styles.navInner}>
        <Link href="/" className={styles.brand}>
          <Image
            src="/spacemakers.png"
            alt="SpaceMakers"
            width={38}
            height={38}
            priority
            className={styles.brandLogo}
          />
        </Link>

        <button
          ref={hamburgerRef}
          type="button"
          className={styles.hamburger}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="nav-drawer"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>

        <div
          id="nav-drawer"
          ref={drawerRef}
          className={`${styles.links} ${open ? styles.linksOpen : ""}`}
          onClick={() => setOpen(false)}
        >
          <div className={styles.navGroup}>
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isNavItemActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={active ? styles.activeLink : undefined}
                  aria-current={active ? "page" : undefined}
                >
                  {Icon && <Icon size={15} />}
                  <span>{item.label}</span>
                </Link>
              );
            })}

            {user &&
              USER_LINKS.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href, pathname);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={active ? styles.activeLink : undefined}
                    aria-current={active ? "page" : undefined}
                  >
                    {Icon && <Icon size={15} />}
                    <span>{item.label}</span>
                  </Link>
                );
              })}
          </div>

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
              <div className={styles.userActions}>
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
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import {
  LayoutDashboard,
  Briefcase,
  Compass,
  Sparkles,
  FileText,
  User,
  PlusCircle,
  LogIn,
  LogOut,
  House,
  Menu,
  X,
} from "lucide-react";
import styles from "./AppShell.module.css";

const DESKTOP_BREAKPOINT = 880;

const GUEST_LINKS = [
  { href: "/opportunities", label: "Opportunities", icon: Briefcase },
  { href: "/demand-map", label: "Demand Map", icon: Compass },
  { href: "/ai", label: "AI Suite", icon: Sparkles },
  { href: "/login", label: "Sign in", icon: LogIn },
];

function isActive(href, pathname) {
  if (href === "/login") return false;
  if (href === "/opportunities") {
    return pathname.startsWith("/opportunities") && !pathname.includes("/new");
  }
  if (href === "/employer") {
    return pathname.startsWith("/employer") && !pathname.includes("/opportunities");
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function AppShell({ children }) {
  const { user, profile, logout, loading } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);

  const isEmployer = profile?.role === "EMPLOYER";
  const isAdmin = profile?.role === "ADMIN";

  async function handleLogout() {
    setOpen(false);
    await logout();
    router.push("/");
  }

  const graduateMain = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/opportunities", label: "Opportunities", icon: Briefcase },
    { href: "/demand-map", label: "Demand Map", icon: Compass },
    { href: "/ai", label: "AI Suite", icon: Sparkles },
  ];

  const employerMain = [
    { href: "/employer", label: "My gigs", icon: Briefcase },
    { href: "/employer/opportunities/new", label: "Post a gig", icon: PlusCircle },
  ];

  const adminMain = [
    { href: "/admin", label: "Admin", icon: House },
    { href: "/employer/opportunities/new", label: "Post a gig", icon: PlusCircle },
  ];

  const mainLinks = isAdmin ? adminMain : isEmployer ? employerMain : graduateMain;

  const accountLinks = user
    ? [
        ...(isEmployer && !isAdmin
          ? []
          : [{ href: "/applications", label: "Applications", icon: FileText }]),
        { href: "/profile", label: "Profile", icon: User },
      ]
    : [];

  const nameInitial = (profile?.name || "U").charAt(0).toUpperCase();
  const roleLabel = isEmployer ? "Employer" : isAdmin ? "Admin" : "Artisan";

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
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  function renderLinks(links) {
    return links.map((item) => {
      const Icon = item.icon;
      const active = isActive(item.href, pathname);
      return (
        <Link
          key={item.href}
          href={item.href}
          className={`${styles.navItem} ${active ? styles.navItemActive : ""}`}
          aria-current={active ? "page" : undefined}
          onClick={() => setOpen(false)}
        >
          <Icon size={18} />
          <span>{item.label}</span>
        </Link>
      );
    });
  }

  return (
    <div className={styles.shell}>
      {/* Mobile top bar */}
      <header className={styles.mobileBar}>
        <Link href="/" className={styles.brand} aria-label="SpaceMakers home">
          <Image src="/spacemakers.png" alt="SpaceMakers" width={30} height={30} priority />
          <span className={styles.brandName}>SpaceMakers</span>
        </Link>
        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="app-sidebar"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Overlay behind mobile drawer */}
      <div
        className={`${styles.overlay} ${open ? styles.overlayVisible : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        id="app-sidebar"
        className={`${styles.sidebar} ${open ? styles.sidebarOpen : ""}`}
        aria-label="Sidebar navigation"
      >
        <div className={styles.sidebarHeader}>
          <Link href="/" className={styles.brand} aria-label="SpaceMakers home">
            <Image src="/spacemakers.png" alt="SpaceMakers" width={30} height={30} priority />
            <span className={styles.brandName}>SpaceMakers</span>
          </Link>
        </div>

        <nav className={styles.sidebarNav}>
          {loading ? (
            <div className={styles.navSkeleton} aria-hidden="true" />
          ) : (
            <div className={styles.navGroup}>
              <span className={styles.navLabel}>Main</span>
              {renderLinks(mainLinks)}
            </div>
          )}

          {!loading && user && (
            <div className={styles.navGroup}>
              <span className={styles.navLabel}>Account</span>
              {renderLinks(accountLinks)}
            </div>
          )}

          {!loading && !user && (
            <div className={styles.navGroup}>
              <span className={styles.navLabel}>Main</span>
              {renderLinks(GUEST_LINKS)}
            </div>
          )}
        </nav>

        <div className={styles.sidebarFooter}>
          {loading ? (
            <div className={styles.userSkeleton} aria-hidden="true" />
          ) : user ? (
            <>
              <div className={styles.userCard}>
                <span className={styles.userInitial}>{nameInitial}</span>
                <div className={styles.userMeta}>
                  <span className={styles.userName}>{profile?.name?.split(" ")[0] || "User"}</span>
                  <span className={styles.userRole}>{roleLabel}</span>
                </div>
              </div>
              <button type="button" className={styles.signOut} onClick={handleLogout}>
                <LogOut size={16} />
                Sign out
              </button>
            </>
          ) : (
            <Link href="/signup" className="btn btn-primary btn-sm">
              Get started
            </Link>
          )}
        </div>
      </aside>

      <main className={styles.content}>{children}</main>
    </div>
  );
}
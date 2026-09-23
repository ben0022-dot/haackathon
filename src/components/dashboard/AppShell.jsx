"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
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
  Menu,
  X,
  ChevronsLeft,
  ChevronsRight,
  ShieldCheck,
} from "lucide-react";
import styles from "./AppShell.module.css";

export default function AppShell({ children }) {
  const { user, profile, logout, loading } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  const isEmployer = profile?.role === "EMPLOYER";
  const isAdmin = profile?.role === "ADMIN";
  const dashboardHref = isEmployer ? "/employer" : isAdmin ? "/admin" : "/dashboard";

  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    if (!mobileOpen) return undefined;
    function onKeyDown(e) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  async function handleLogout() {
    await logout();
    router.push("/");
  }

  const navMain = [
    { href: dashboardHref, label: "Dashboard", icon: LayoutDashboard },
    { href: "/opportunities", label: "Opportunities", icon: Briefcase },
    { href: "/demand-map", label: "Demand Map", icon: Compass },
    { href: "/ai", label: "AI Suite", icon: Sparkles },
  ];

  const navTools = [{ href: "/applications", label: "Applications", icon: FileText }];

  if (user) {
    navTools.push({ href: "/profile", label: "Profile", icon: User });
  }

  const isActive = (href) => {
    if (href === "/opportunities") {
      return pathname.startsWith("/opportunities") && !pathname.includes("/new");
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  function renderLink(item, group) {
    const Icon = item.icon;
    const active = isActive(item.href);
    return (
      <Link
        key={`${group}-${item.href}`}
        href={item.href}
        className={`${styles.navLink} ${active ? styles.navLinkActive : ""}`}
        aria-current={active ? "page" : undefined}
        title={collapsed ? item.label : undefined}
        onClick={() => setMobileOpen(false)}
      >
        <Icon size={18} strokeWidth={2} />
        <span className={styles.navLabel}>{item.label}</span>
      </Link>
    );
  }

  const showCollapseToggle = true;

  return (
    <div className={styles.shell}>
      <header className={styles.topbar}>
        <button
          type="button"
          className={styles.iconButton}
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <Link href="/" className={styles.topBarBrand} aria-label="SpaceMakers home">
          <Image src="/spacemakers.png" alt="" width={28} height={28} priority />
        </Link>

        <div className={styles.topbarSpacer} />

        {!loading &&
          (user ? (
            <span className={styles.topbarUser}>
              {profile?.name?.split(" ")[0] || "Hi"}
            </span>
          ) : (
            <Link href="/login" className={styles.topbarCta}>
              Sign In
            </Link>
          ))}
      </header>

      {mobileOpen && (
        <button
          type="button"
          className={styles.backdrop}
          aria-label="Close navigation"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        ref={sidebarRef}
        className={[
          styles.sidebar,
          collapsed ? styles.sidebarCollapsed : "",
          mobileOpen ? styles.sidebarOpen : "",
        ].join(" ")}
        aria-label="Sidebar navigation"
      >
        <div className={styles.sidebarBrand}>
          <Link href="/" className={styles.brandInner} aria-label="SpaceMakers home">
            <Image
              src="/spacemakers.png"
              alt="SpaceMakers"
              width={34}
              height={34}
              priority
              className={styles.brandLogo}
            />
            {!collapsed && <span className={styles.brandName}>SpaceMakers</span>}
          </Link>

          {showCollapseToggle && !mobileOpen && (
            <button
              type="button"
              className={`${styles.iconButton} ${styles.collapseToggle}`}
              onClick={() => setCollapsed((v) => !v)}
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
              title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {collapsed ? <ChevronsRight size={18} /> : <ChevronsLeft size={18} />}
            </button>
          )}

          {mobileOpen && (
            <button
              type="button"
              className={styles.iconButton}
              aria-label="Close navigation"
              onClick={() => setMobileOpen(false)}
            >
              <X size={20} />
            </button>
          )}
        </div>

        <nav className={styles.sidebarNav}>
          <div className={styles.navGroup}>
            <p className={styles.navHeading}>Main</p>
            {navMain.map((item) => renderLink(item, "main"))}
          </div>

          <div className={styles.navGroup}>
            <p className={styles.navHeading}>My tools</p>
            {navTools.map((item) => renderLink(item, "tool"))}
          </div>

          {!collapsed && (isEmployer || isAdmin) && (
            <div className={styles.navGroup}>
              {isAdmin && (
                <Link href="/admin" className={styles.navLink}>
                  <ShieldCheck size={18} strokeWidth={2} />
                  <span className={styles.navLabel}>Admin</span>
                </Link>
              )}
              <Link href="/employer/opportunities/new" className={styles.navLink}>
                <PlusCircle size={18} strokeWidth={2} />
                <span className={styles.navLabel}>Post Gig</span>
              </Link>
            </div>
          )}
        </nav>

        <div className={styles.sidebarFooter}>
          {loading ? (
            <div className={styles.footerPlaceholder} aria-hidden="true" />
          ) : user ? (
            <div className={styles.userBox}>
              <div className={styles.userBadge}>
                <span className={styles.userInitial}>
                  {(profile?.name || "U").charAt(0).toUpperCase()}
                </span>
                {!collapsed && (
                  <span className={styles.userMeta}>
                    <span className={styles.userName}>
                      {profile?.name?.split(" ")[0] || "User"}
                    </span>
                    <span className={styles.userRole}>
                      {isEmployer ? "Employer" : isAdmin ? "Admin" : "Artisan"}
                    </span>
                  </span>
                )}
              </div>
              {!collapsed && (
                <button
                  type="button"
                  className={styles.signOutButton}
                  onClick={handleLogout}
                  title="Sign out of account"
                >
                  <LogOut size={16} />
                  <span>Sign Out</span>
                </button>
              )}
              {collapsed && (
                <button
                  type="button"
                  className={styles.iconButton}
                  onClick={handleLogout}
                  title="Sign out of account"
                  aria-label="Sign out"
                >
                  <LogOut size={16} />
                </button>
              )}
            </div>
          ) : (
            <div className={styles.guestBox}>
              <Link href="/login" className={styles.guestLink}>
                <LogIn size={16} />
                <span>Sign In</span>
              </Link>
              <Link href="/signup" className={styles.guestLinkPrimary}>
                <span>Get Started</span>
              </Link>
            </div>
          )}
        </div>
      </aside>

      <div className={styles.content}>{children}</div>
    </div>
  );
}
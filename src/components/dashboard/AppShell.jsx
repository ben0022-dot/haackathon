"use client";

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
  House,
} from "lucide-react";
import styles from "./AppShell.module.css";

export default function AppShell({ children }) {
  const { user, profile, logout, loading } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  const isEmployer = profile?.role === "EMPLOYER";
  const isAdmin = profile?.role === "ADMIN";
  const dashboardHref = isEmployer ? "/employer" : isAdmin ? "/admin" : "/dashboard";
  const dashboardLabel = isEmployer ? "Employment" : "Dashboard";

  async function handleLogout() {
    await logout();
    router.push("/");
  }

  const isActive = (href) => {
    if (href === "/opportunities") {
      return pathname.startsWith("/opportunities") && !pathname.includes("/new");
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const DESKTOP_LINKS = [
    { href: "/opportunities", label: "Opportunities", icon: Briefcase },
    { href: "/demand-map", label: "Demand Map", icon: Compass },
    { href: "/ai", label: "AI Suite", icon: Sparkles },
  ];

  const tabItems = isEmployer
    ? [
        { href: dashboardHref, label: "Employment", icon: House },
        { href: "/opportunities", label: "Opportunities", icon: Briefcase },
        { href: "/employer/opportunities/new", label: "Post gig", icon: PlusCircle },
        { href: "/profile", label: "Profile", icon: User },
      ]
    : isAdmin
    ? [
        { href: dashboardHref, label: "Admin", icon: House },
        { href: "/opportunities", label: "Opportunities", icon: Briefcase },
        { href: "/applications", label: "Applications", icon: FileText },
        { href: "/profile", label: "Profile", icon: User },
      ]
    : [
        { href: dashboardHref, label: "Dashboard", icon: LayoutDashboard },
        { href: "/opportunities", label: "Opportunities", icon: Briefcase },
        { href: "/applications", label: "Applications", icon: FileText },
        { href: "/profile", label: "Profile", icon: User },
      ];

  const guestTabs = [
    { href: "/opportunities", label: "Opportunities", icon: Briefcase },
    { href: "/demand-map", label: "Demand Map", icon: Compass },
    { href: "/ai", label: "AI", icon: Sparkles },
    { href: "/login", label: "Sign in", icon: LogIn },
  ];

  const tabs = user ? tabItems : guestTabs;

  const tabActive = (href) => {
    if (href === "/login") return false;
    return isActive(href);
  };

  const nameInitial = (profile?.name || "U").charAt(0).toUpperCase();

  return (
    <div className={styles.shell}>
      <header className={styles.topNav} aria-label="Primary navigation">
        <div className={styles.topNavInner}>
          <Link href="/" className={styles.brand} aria-label="SpaceMakers home">
            <Image src="/spacemakers.png" alt="SpaceMakers" width={32} height={32} priority />
            <span className={styles.brandName}>SpaceMakers</span>
          </Link>

          <nav className={styles.topLinks}>
            {DESKTOP_LINKS.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.topLink} ${active ? styles.topLinkActive : ""}`}
                  aria-current={active ? "page" : undefined}
                >
                  <Icon size={15} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
            {user && (
              <>
                <Link
                  href={dashboardHref}
                  className={`${styles.topLink} ${isActive(dashboardHref) ? styles.topLinkActive : ""}`}
                  aria-current={isActive(dashboardHref) ? "page" : undefined}
                >
                  <LayoutDashboard size={15} />
                  <span>{dashboardLabel}</span>
                </Link>
                <Link
                  href="/applications"
                  className={`${styles.topLink} ${isActive("/applications") ? styles.topLinkActive : ""}`}
                  aria-current={isActive("/applications") ? "page" : undefined}
                >
                  <FileText size={15} />
                  <span>Applications</span>
                </Link>
                <Link
                  href="/profile"
                  className={`${styles.topLink} ${isActive("/profile") ? styles.topLinkActive : ""}`}
                  aria-current={isActive("/profile") ? "page" : undefined}
                >
                  <User size={15} />
                  <span>Profile</span>
                </Link>
              </>
            )}
          </nav>

          <div className={styles.topActions}>
            {loading ? (
              <div className={styles.skeleton} aria-hidden="true" />
            ) : user ? (
              <>
                {(isEmployer || isAdmin) && (
                  <Link href="/employer/opportunities/new" className="btn btn-primary btn-sm">
                    <PlusCircle size={16} />
                    Post a gig
                  </Link>
                )}
                <div className={styles.userBadge}>
                  <span className={styles.userInitial}>{nameInitial}</span>
                  <span className={styles.userName}>
                    {profile?.name?.split(" ")[0] || "User"}
                  </span>
                </div>
                <button
                  type="button"
                  className={styles.signOut}
                  onClick={handleLogout}
                  title="Sign out of account"
                >
                  <LogOut size={16} />
                  <span>Sign out</span>
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className={styles.loginLink}>
                  Log in
                </Link>
                <Link href="/signup" className="btn btn-primary btn-sm">
                  Get started
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      <main className={styles.content}>{children}</main>

      <nav className={styles.tabBar} aria-label="Bottom navigation">
        {tabs.map((item) => {
          const Icon = item.icon;
          const active = tabActive(item.href);
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`${styles.tab} ${active ? styles.tabActive : ""}`}
              aria-current={active ? "page" : undefined}
            >
              <Icon size={20} strokeWidth={active ? 2.4 : 2} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
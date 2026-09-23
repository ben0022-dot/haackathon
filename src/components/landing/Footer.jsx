import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandCol}>
          <Link href="/" className={styles.brand} aria-label="SpaceMakers home">
            <Image src="/spacemakers.png" alt="SpaceMakers" width={28} height={28} />
            <span className={styles.brandName}>SpaceMakers</span>
          </Link>
          <p className={styles.tagline}>
            Connecting TVET graduates and skilled artisans with local work in Nairobi — for free.
          </p>
        </div>

        <nav className={styles.col} aria-label="Platform">
          <h4 className={styles.heading}>Platform</h4>
          <Link href="/opportunities">Opportunities</Link>
          <Link href="/demand-map">Demand map</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/ai">AI Suite</Link>
        </nav>

        <nav className={styles.col} aria-label="Account">
          <h4 className={styles.heading}>Account</h4>
          <Link href="/signup">Create a profile</Link>
          <Link href="/signup?role=EMPLOYER">Post a gig</Link>
          <Link href="/login">Log in</Link>
        </nav>
      </div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} SpaceMakers Kenya. Free to use for everyone.</span>
      </div>
    </footer>
  );
}
"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span className={styles.logoVIT}>VIT</span>
        <span className={styles.logoBlockchain}>Blockchain</span>
      </div>

      {/* Desktop View */}
      <div className={styles.desktopMenu}>
        <div className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/Projects">Projects</Link>
          <Link href="/Events">Events</Link>
          <Link href="/Blogs">Blogs</Link>
          <Link href="/Leaderboard">LeaderBoard</Link>
          <Link href="/Learn">Learn</Link>
        </div>
        <div className={styles.login}>
          <Link href="/Login">Login</Link>
        </div>
      </div>

      {/* Mobile View */}
      <button className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </button>

      {/* Fullscreen Menu */}
      <div
        className={`${styles.fullscreenMenu} ${
          isMenuOpen ? styles.showMenu : ""
        }`}
      >
        <div className={styles.menuLinks}>
          <Link href="/">Home</Link>
          <Link href="/Projects">Projects</Link>
          <Link href="/Events">Events</Link>
          <Link href="/Blogs">Blogs</Link>
          <Link href="/Learn">Learn</Link>
          <div className={styles.login}>
            <Link href="/Login">Login</Link>
          </div>
        </div>
        <button className={styles.closeButton} onClick={toggleMenu}>
          &times;
        </button>
      </div>
    </nav>
  );
}

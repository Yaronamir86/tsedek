import Link from "next/link";
import styles from "../styles/Nav.module.css";
import Typewriter from "typewriter-effect";
import { useRouter } from "next/router";
import React, { useEffect } from "react";




const Navbar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset >= 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? styles.nav_scrolled : styles.nav}>
      <div className={styles.links}>
        <Link
          className={currentRoute === "/" ? styles.link_active : styles.link }
          href="/"
        >
          בית
        </Link>
        <Link
          className={
            currentRoute === "/About" ? styles.link_active : styles.link
          }
          href="/About"
        >
          אודותי
        </Link>
        <Link
          className={
            currentRoute === "/Testimonials" ? styles.link_active : styles.link
          }
          href="/Testimonials"
        >
          סיפורי הצלחה
        </Link>
        <Link
          className={
            currentRoute === "/OurService" ? styles.link_active : styles.link
          }
          href="/OurService"
        >
          סוגי תביעות
        </Link>
        <Link
          className={
            currentRoute === "/MoreInfo" ? styles.link_active : styles.link
          }
          href="/MoreInfo"
        >
          מידע נוסף
        </Link>
        <Link
          className={
            currentRoute === "/Contact" ? styles.link_active : styles.link
          }
          href="/Contact"
        >
          צור קשר
        </Link>
        <h1 className={scrolled ? styles.logo_scrolled : styles.logo}></h1>
      </div>
      
    </nav>
  );
};

export default Navbar;

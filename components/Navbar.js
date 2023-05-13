import Link from "next/link";
import styles from "../styles/Nav.module.css";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    const screenWidth = window.innerWidth;
    const offset = window.scrollY;
  
    if (screenWidth > 720 && offset >= 10) {
      setScrolled(true);
    } else if (screenWidth < 720 || offset < 10) {
      setScrolled(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  return (
    <nav className={scrolled ? styles.nav_scrolled : styles.nav}>
      <HamburgerMenu />
      <div className={styles.links}>
        <Link
          className={currentRoute === "/" ? styles.link_active : styles.link}
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
            currentRoute === "/FaqList" ? styles.link_active : styles.link
          }
          href="/FaqList"
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
        
      </div>
      <div className={scrolled ? styles.logo_scrolled : styles.logo}></div>
    </nav>
  );
};

export default Navbar;

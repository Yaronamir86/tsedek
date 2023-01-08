import Link from "next/link";
import styles from "../styles/Nav.module.css";
import Typewriter from "typewriter-effect";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <nav className={styles.nav}>
      <div className={styles.links}>
        <Link className={currentRoute === "/" ? styles.link_active : styles.link} href="/">
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
            currentRoute === "/OurServices" ? styles.link_active : styles.link
          }
          href="/OurServices"
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
        <h1 className={styles.logo}>צדק</h1>
      </div>
      <div className={styles.typewriter}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("תנו לי לחבר בין הזכויות שלכם לחברת הביטוח..")
              .callFunction(() => {
                console.log("String typed out!");
              })
              .pauseFor(2500)
              .start();
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;

import Link from 'next/link';
import { useState } from 'react';
import styles from "../styles/HamburgerMenu.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";


export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
      <button className={styles.hamburger} onClick={toggleMenu}>
      {isOpen &&  <AiOutlineClose style={{color:"#edf1d6"}}/>}
      {!isOpen && <GiHamburgerMenu style={{color:"#edf1d6"}}/>}
      </button>
      <div className={styles.logo}></div>
      </div>
      <div className={ isOpen ? styles.menu_open : styles.menu}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link href="#" className={styles.link}>בית</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/About" className={styles.link}>אודותי</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/Testimonials#" className={styles.link}>סיפורי הצלחה</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/OurService#" className={styles.link}>סוגי תביעות</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/MoreInfo" className={styles.link}>מידע נוסף</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/Contact" className={styles.link}>צור קשר</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

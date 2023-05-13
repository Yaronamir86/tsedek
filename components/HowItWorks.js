import React from "react";
import styles from "../styles/HowItWorks.module.css";

const HowItWorks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
      <h2 className={styles.title}>
        <h1>אז איך זה עובד?</h1>
      </h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <div className={styles.iconContainer}>
          <div className={styles.icon}></div>
          </div>
          <h3 className={styles.paragraph}>1.פגישה ראשונית לא מחייבת</h3>
        </li>
        <div className={styles.arrowUp}></div>
        <li className={styles.item}>
        <div className={styles.iconContainer}>
          <div className={`${styles.icon} ${styles.icon_type_files}`}></div>
          </div>
          <h3 className={styles.paragraph}>2.בדיקת מסמכים רפואיים</h3>
        </li>
        <div className={styles.arrowDown}></div>
        <li className={styles.item}>
        <div className={styles.iconContainer}>
          <div className={`${styles.icon} ${styles.icon_type_mail}`}></div>
          </div>
          <h3 className={styles.paragraph}>3.הכנה ובניית התיק להגשה</h3>
        </li>
        
       
      </ul>
      <div className={styles.footer}>
          <h3>לא מוותרים על הזכויות ומרוויחים!</h3>
      </div>
      </div>
    </div>
  );
};

export default HowItWorks;

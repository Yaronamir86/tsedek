import React from 'react';
import styles from "../styles/Endpage.module.css";

const EndPage = () => {
  return (
    <div className={styles.paragraph}>
            <p className={styles.firstLine}>
              {" "}
              אל תהססו! ואל תוותרו על הזכויות שלכם!{" "}
            </p>
            <p className={styles.secondLine}>
              תנו לי ללוות אתכם ולהגדיל לכם את הסיכויים להחזר!
            </p>
          </div>
  )
}

export default EndPage;
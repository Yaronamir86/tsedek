import React from "react";
import styles from "../styles/HowItWorks.module.css";

const Section = () => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionTitle}>
        <h1>Main Title</h1>
      </div>
      <div className={styles.sectionContent}>
        <div className={styles.column}>
          <h2>Column 1</h2>
          <p>Subtitle for Column 1</p>
        </div>
        <div className={styles.column}>
          <h2>Column 2</h2>
          <p>Subtitle for Column 2</p>
        </div>
        <div className={styles.column}>
          <h2>Column 3</h2>
          <p>Subtitle for Column 3</p>
        </div>
        <div className={styles.column}>
          <h2>Column 4</h2>
          <p>Subtitle for Column 4</p>
        </div>
      </div>
      <div className={styles.footer}>
        <p>Footer Content</p>
      </div>
    </div>
  );
};

export default Section;

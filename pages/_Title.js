import React from "react";
import { GiScales } from "react-icons/gi";
import styles from "../styles/Title.module.css";

const titleContainer = (props) => {
  return (
    <>
      <div className={styles.container}>
        <GiScales className={styles.GiScales} />
        <h1 className={styles.title}>{props.title}</h1>
        <GiScales className={styles.GiScales}/>
      </div>
    </>
  );
};
export default titleContainer;

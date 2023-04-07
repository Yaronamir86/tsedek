import React from "react";
import { GrCircleQuestion } from "react-icons/gr";
import { BsExclamationCircle } from "react-icons/bs";
import styles from "../styles/Faq.module.css";
import info from "../utils/moreInfoData";


const Faq = () => {
  return (
    <>
        {info.map(({ question, answer, id }) => {
          return (
            <>
              <div className={styles.wrapper} key={id}>
                <div className={styles.question}>
                  <GrCircleQuestion
                    style={{
                      display: "flex",
                      padding: "0 20px",
                      width: "24px",
                      height: "24px",
                      margin: "auto",
                      justifyContent: "center",
                      alignSelf: "center",
                      color: "white",
                    }}
                  />
                  {question}
                </div>

                <div className={styles.answer}>
                  <BsExclamationCircle
                    style={{
                      display: "flex",
                      padding: "0 20px",
                      margin: "auto",
                      width: "24px",
                      height: "24px",
                      justifyContent: "center",
                      alignSelf: "center",
                    }}
                  />
                  {answer}
                </div>
              </div>
            </>
          );
        })}
    </>
  );
};

export default Faq;

import React from "react";
import { GrCircleQuestion } from "react-icons/gr";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import styles from "../styles/Faq.module.css";
import info from "../utils/faqItems";


const Faq = () => {
  return (
    <>
        {info.map(({ question, answer, id }) => {
          return (
            <>
              <div className={styles.wrapper} key={id}>
                <div className={styles.question}>
                  <div className={styles.icon}>
                  <AiOutlineQuestionCircle />
                  </div>
                  {question}
                </div>

                <div className={styles.answer}>
                  <div className={styles.icon}>
                  <HiOutlineExclamationCircle />
                  </div>
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

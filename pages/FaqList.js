import { useState } from "react";
import Head from "next/head";
import TitleContainer from "./_Title";
import info from "../utils/faqItems";
import styles from "../styles/FaqList.module.css";
import EndPage from "../components/EndPage";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function FaqList() {
  const [states, setStates] = useState(info.map(() => ({ isOpen: false })));

  const toggleAnswer = (index) => {
    setStates((prevState) =>
      prevState.map((state, i) =>
        i === index ? { ...state, isOpen: !state.isOpen } : state
      )
    );
  };

  return (
    <>
      <Head>
        <title>צדק | מידע נוסף</title>
      </Head>
      <div className={styles.bgImage}>
        <section className={styles.container}>
          <TitleContainer title={"שאלות ותשובות"} />

          <div className={styles.faq}>
            {info.map(({ question, answer, id }, index) => (
              <div className={styles.card} key={id}>
                <div
                  className={`${styles.question} ${
                    states[index].isOpen ? styles.show : ""
                  }`}
                >
                  <button
                    className={styles.toggle}
                    onClick={() => toggleAnswer(index)}
                  >
                    {states[index].isOpen ? (
                      <IoIosArrowUp  className={`${styles.icon} ${
                        states[index].isOpen ? styles.show : ""
                      }`} />
                    ) : (
                      <IoIosArrowDown className={styles.icon} />
                    )}
                    <h2 className={styles.paragraph}>{question}</h2>
                  </button>
                </div>
                <div
                  className={`${styles.answer} ${
                    states[index].isOpen ? styles.show : ""
                  }`}
                >
                  <p className={styles.paragraph}>{answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <EndPage />
      </div>
    </>
  );
}

export default FaqList;

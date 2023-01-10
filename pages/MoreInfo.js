import Head from "next/head";
import styles from "../styles/info.module.css";
import info from "../utils/moreInfoData";
import TitleContainer from "./_Title";
import { CgAsterisk } from "react-icons/cg";

const MoreInfo = () => {
  return (
    <>
      <Head>
        <title>צדק | מידע נוסף</title>
      </Head>
      <section className="content">
        <TitleContainer title={"שאלות ותשובות"} />
        {info.map(({ question, answer, id }) => {
          return (
            <>
              <div className={styles.content} key={id}>
                <p className={styles.question}>{question}</p>
                <p className={styles.answer}>{answer}</p>
              </div>
              <div className={styles.seperator}>
                <CgAsterisk style={{ width: "25", height: "25" }} />
                <CgAsterisk style={{ width: "25", height: "25" }} />
                <CgAsterisk style={{ width: "25", height: "25" }} />
              </div>
            </>
          );
        })}
        <p>אל תהססו, אל תוותרו על הזכויות שלכם,  תנו לי ללוות אתכם ולהגדיל לכם את הסיכויים להחזר!</p>
      </section>
    </>
  );
};

export default MoreInfo;

import Head from "next/head";
import styles from "../styles/info.module.css";
import info from "../utils/moreInfoData";
import TitleContainer from "./_Title";
import { CgAsterisk } from "react-icons/cg";
import { GrCircleQuestion } from "react-icons/gr";
import { BsExclamationCircle } from "react-icons/bs";

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
              <div className={styles.wrapper} key={id}>
              <GrCircleQuestion
                    style={{
                      display: "flex",
                      padding: "0 20px",
                      width: "24px",
                      height: "24px",
                      margin: "auto",
                      justifyContent: "center",
                      alignSelf: "center",
                    }}
                  />
                <p className={styles.question}>
                  {question}
                </p>
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
                <p className={styles.answer}>
                  {answer}
                </p>
              </div>
              <div className={styles.seperator}>
                <CgAsterisk style={{ width: "25", height: "25" }} />
                <CgAsterisk style={{ width: "25", height: "25" }} />
                <CgAsterisk style={{ width: "25", height: "25" }} />
              </div>
            </>
          );
        })}
        <p>
          אל תהססו, אל תוותרו על הזכויות שלכם, תנו לי ללוות אתכם ולהגדיל לכם את
          הסיכויים להחזר!
        </p>
      </section>
    </>
  );
};

export default MoreInfo;

import Head from "next/head";
import styles from "../styles/info.module.css";
import TitleContainer from "./_Title";
import  Faq  from "../components/Faq";


function MoreInfo() {
  
  return (
    <>
      <Head>
        <title>צדק | מידע נוסף</title>
      </Head>
      <div className={styles.bgImage}>
        <section className={styles.content}>
          <TitleContainer title={"שאלות ותשובות"} />
          <div className={styles.container}>
      <Faq />
          </div>
          <div className={styles.paragraph}>
            <p className={styles.firstLine}>
              {" "}
              אל תהססו! ואל תוותרו על הזכויות שלכם!{" "}
            </p>
            <p className={styles.thirdLine}>
              תנו לי ללוות אתכם ולהגדיל לכם את הסיכויים להחזר!
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default MoreInfo;

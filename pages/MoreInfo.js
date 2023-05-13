import Head from "next/head";
import styles from "../styles/info.module.css";
import TitleContainer from "./_Title";
import  Faq  from "../components/Faq";
import EndPage from "../components/EndPage";


function MoreInfo() {
  
  return (
    <>
      <Head>
        <title>צדק | מידע נוסף</title>
      </Head>
      <div className={styles.bgImage}>
        <div className={styles.content}>
          <TitleContainer title={"שאלות ותשובות"} />
          <div className={styles.container}>
      <Faq />
          </div>
          <EndPage />
        </div>
      </div>
    </>
  );
};

export default MoreInfo;

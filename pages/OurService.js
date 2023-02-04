import Head from "next/head";
import TitleContainer from "./_Title";
import serviceData from "../utils/servicesData";
import styles from "../styles/OurService.module.css";
import FadeInOnScroll from "../components/FadeInOnScroll";

const OurServices = () => {
  return (
    <>
      <Head>
        <title>צדק | סוגי תביעות</title>
      </Head>
      <section className={styles.container}>
        <TitleContainer title={"סוגי תביעות"} />
        {serviceData.map(({ id, base, act, result }) => {
          return (
            <>
              <div className={styles.timeline} key={id}>
                  <FadeInOnScroll>
                    <section className={styles.lightbox}>
                    <div className={styles.card}>
                      <p className={styles.article}>{base}</p>
                      <p className={styles.article}>{act}</p>
                      <p className={styles.article}>{result}</p>
                    </div>
                    </section>
                    </FadeInOnScroll>
                    <FadeInOnScroll>
                    <section className={styles.darkbox}>
                    <div className={styles.card}>
                      <p className={styles.darkArticle}>{base}</p>
                      <p className={styles.darkArticle}>{act}</p>
                      <p className={styles.darkArticle}>{result}</p>
                    </div>
                    </section>
                    <div className={styles.seperator}></div>
                  </FadeInOnScroll>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default OurServices;

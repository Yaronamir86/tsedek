import Head from "next/head";
import TitleContainer from "./_Title";
import serviceData from "../utils/servicesData";
import styles from "../styles/OurServices.module.css";
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
              <div class={styles.timeline} key={id}>
                <div class="outer">
                <FadeInOnScroll>
                  <div class={styles.card}>
                    <div class={styles.case}>
                      <h3 class={styles.title}>מקרה</h3>
                      <p>{base}</p>
                    </div>
                      </div>
                  <div class={styles.card}>
                    <div class={styles.act}>
                      <h3 class={styles.title}>פעולה</h3>
                      <p>{act}</p>
                    </div>
                  </div>
                  <div class={styles.card}>
                    <div class={styles.result}>
                      <h3 class={styles.title}>תוצאה</h3>
                      <p>{result}</p>
                    </div>
                  </div>
                  </FadeInOnScroll>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default OurServices;

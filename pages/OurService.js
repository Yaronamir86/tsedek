import Head from "next/head";
import TitleContainer from "./_Title";
import serviceData from "../utils/servicesData";
import styles from "../styles/OurService.module.css";
import FadeInOnScroll from "../components/FadeInOnScroll";
import { HiDocumentText, HiDocumentSearch } from "react-icons/hi";
import { GrDocumentVerified } from "react-icons/gr";
import EndPage from "../components/EndPage";

const OurServices = () => {
  return (
    <>
      <div className={styles.bgImage}>
        <Head>
          <title>צדק | סוגי תביעות</title>
        </Head>
        <section className={styles.container}>
          <TitleContainer title={"סוגי תביעות"} />
          {serviceData.map(({ id, headerBase, base, headerAct, result }) => {
            return (
              <>
                <div className={styles.timeline} key={id}>
                  <FadeInOnScroll>
                    <div className={styles.card}>
                      <div className={styles.article}>
                        <div className={styles.content}>
                          <div className={styles.header__container}>
                            {headerBase}
                          </div>
                          <div className={styles.paragraph__container}>
                            {base}
                          </div>
                        </div>
                        <div className={styles.icon__container}>
                          <HiDocumentText className={`${styles.icon} ${styles.icon_type_text}`} />
                        </div>
                      </div>
                      <div className={styles.article}>
                        <div className={styles.icon__container}>
                          <HiDocumentSearch className={`${styles.icon} ${styles.icon_type_search}`} />
                        </div>
                        <div className={styles.content}>
                          <div className={styles.header__container}>
                            {headerAct}
                          </div>
                          <div className={styles.paragraph__container}>
                            {base}
                          </div>
                        </div>
                      </div>
                      <div className={styles.article}>
                        <div
                          className={styles.paragraph__container_type_result}
                        >
                          {result}
                        </div>
                        <div className={styles.icon__container}>
                          <GrDocumentVerified className={`${styles.icon} ${styles.icon_type_verified}`} />
                        </div>
                      </div>
                    </div>
                  </FadeInOnScroll>
                </div>
              </>
            );
          })}
        </section>
        <EndPage />
      </div>
    </>
  );
};

export default OurServices;

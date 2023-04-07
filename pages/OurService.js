import Head from "next/head";
import TitleContainer from "./_Title";
import serviceData from "../utils/servicesData";
import styles from "../styles/OurService.module.css";
import FadeInOnScroll from "../components/FadeInOnScroll";
import { HiDocumentText, HiDocumentSearch } from "react-icons/hi";
import { GrDocumentVerified } from "react-icons/gr";

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
                    <section className={styles.lightbox}>
                      <div className={styles.card}>
                        <div className={styles.article}>
                          <div className={styles.content}>
                            <div className={styles.header__container}>{headerBase}</div>
                            <div className={styles.paragraph__container}>
                              {base}
                            </div>
                          </div>
                          <div className={styles.icon__container}>
                            <HiDocumentText
                              style={{
                                width: "60px",
                                height: "60px",
                                display: "flex",
                                justifyContent: "center",
                                alignSelf: "center",
                              }}
                            />
                          </div>
                        </div>
                        <div className={styles.article}>
                          <div className={styles.icon__container}>
                            <HiDocumentSearch
                              style={{
                                width: "60px",
                                height: "60px",
                                display: "flex",
                                justifyContent: "center",
                                alignSelf: "center",
                              }}
                            />
                          </div>
                          <div className={styles.content}>
                            <div className={styles.header__container}>{headerAct}</div>
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
                            <GrDocumentVerified
                              style={{
                                width: "60px",
                                height: "60px",
                                display: "flex",
                                justifyContent: "center",
                                alignSelf: "center",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </section>
                  </FadeInOnScroll>
                </div>
              </>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default OurServices;

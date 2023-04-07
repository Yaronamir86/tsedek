import Head from "next/head";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import data from "../utils/data";
import styles from "../styles/Testimonials.module.css";
import { ImAttachment } from "react-icons/im";
import TitleContainer from "./_Title";

const Testimonials = () => {
  return (
    <>
      <Head>
        <title>צדק | סיפורי הצלחה</title>
      </Head>
      <div className={styles.bgImage}>
      <TitleContainer title={"סיפורי הצלחה"} />
      <section className={styles.section}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={true}
        >
          {data.map(
            ({ date, title, text1, text2, text3, text4, text5 }, index) => {
              return (
                <SwiperSlide key={index} >
                  <div className={styles.card}>
                    <ImAttachment
                      style={{
                        position: "absolute",
                        top: "-2",
                        left: "0",
                        width: "50px",
                        height: "50px",
                        overflow: "visible",
                        rotate: "90deg",
                      }}
                    />
                    <p className={styles.paragraph}>{date}</p>
                    <h5 className={styles.title}>{title}</h5>
                    <p className={styles.paragraph}>{text1}</p>
                    <p className={styles.paragraph}>{text2}</p>
                    <p className={styles.paragraph}>{text3}</p>
                    <p className={styles.paragraph}>{text4}</p>
                    <p className={styles.paragraph}>{text5}</p>
                  </div>
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      </section>
      </div>
    </>
  );
};

export default Testimonials;

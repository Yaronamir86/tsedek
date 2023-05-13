import Head from "next/head";
import styles from "../styles/About.module.css";
import TitleContainer from "./_Title";
import FadeInOnScroll from "../components/FadeInOnScroll";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Link from "next/link";
import EndPage from "../components/EndPage";


const About = () => {
  return (
    <>
      <Head>
        <title>צדק | אודותי</title>
      </Head>
      <div className={styles.bgImage}>
        <section className={styles.container}>
          <TitleContainer title={"אודותי"} />
          <article className={styles.content}>
            <FadeInOnScroll>
              <p className={styles.paragraph}>
                שמי אושרת אמיר ואני גאה להיות בעלת חברה צדק שכל מטרתה היא לדאוג
                לכם המבוטחים בלשפר לכם את הסיכויים בין היתר לקבל את הזכויות שלכם
                מחברת הביטוח . עשרות המבוטחים שכבר פנו אלי זכו לקבל את מה שמגיע
                להם.
              </p>
              <p className={styles.paragraph}>
                דרכי מתחילה לפני 20 שנים באחת מחברות הביטוח הגדולות וממשיכה
                בניהול בחברה גדולה יותר ומשמעותית יותר עם הכמות המבוטחים בין
                הגבוהות ביותר . כמי שנגעה וראתה עשרות ערעורים , בקשות וצרכים של
                מבוטחים אני יודעת לזהות באופן מדויק את עמדתה של חברת הביטוח
                ולנתח את הסיבות לעמדות אלו .
              </p>
              <p className={styles.paragraph}>
                {" "}
                לצד היכולת להבין כל הגדרה , סעיף , החרגות שיש לכם בפוליסה ,אני
                בעלת תואר במנהל מערכות בריאות ומכירה היטב את המערכות הציבוריות
                והפרטיות , השילוב בין השניים לעיתים מהווה נדבך חשוב למיקסום
                החזרים. הידע ההבנה והמקצועיות שרכשתי הם ערך חשוב והזדמנות ענקית
                ללוות אותכם .
              </p>
            </FadeInOnScroll>
            <Image 
              src="/new_scales.jpeg"
              alt=""
              width={550}
              height={350}
              className={styles.image}
            ></Image>
            <FadeInOnScroll>
              <Image
                src="/new_scales.jpeg"
                alt=""
                width={550}
                height={350}
                className={styles.image}
              ></Image>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <p className={styles.paragraph}>
                בחיי נאלצתי להתמודד מול חברת ביטוח שהרימה קשיים והביאה את משפחתי
                לטלטלה רבה , למדתי שכאשר אדם חולה או נזקק לשירות רפואי הדבר
                האחרון שהוא רוצה או צריך זה להתמודד עם חברת הביטוח.
              </p>
              <p className={styles.paragraph}>
                {" "}
                לפני מספר שנים ולראשונה בסיפורי האישי גמלה בי ההחלטה שמצאתי את
                הדבר שעלי לעשות , לעזור ולקדם עבור אנשים את הסיכויים לקבל את מה
                שמגיע להם ולפנות אותם להחלים או לטפל ביקירים שלהם.
              </p>
              <Link className={styles.link} href="/Contact">
                  <div className={`${styles.arrow} ${styles.arrow1}`}>
                    <FiChevronLeft />
                    <FiChevronLeft />
                  </div>
                  <span>לחץ ליצירת קשר</span>
                  <div className={`${styles.arrow} ${styles.arrow2}`}>
                    <FiChevronRight />
                    <FiChevronRight />
                  </div>
              </Link>
            </FadeInOnScroll>
          </article>
        </section>
        <EndPage />
      </div>
    </>
  );
};

export default About;

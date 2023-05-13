import Head from "next/head";
import styles from "../styles/Contact.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import TitleContainer from "./_Title";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_tnv0s9r",
      "template_9efuwy8",
      form.current,
      "bg4Va4IhPuiXuWQWv"
    );

    e.target.reset();
  };
  return (
    <>
      <Head>
        <title>צדק | צור קשר</title>
      </Head>
      <div className={styles.bgImage}>
        <TitleContainer title={"בואו נשמור על קשר..."} />
        <div className={styles.container}>
          <div className={styles.options}>
            <artical className={styles.mail}>
              <MdOutlineEmail className="contact__option-icon" />
              <h4 className={styles.inner}>Email</h4>
              <h5 className={styles.inner}>zhdek23@gmail.com</h5>
              <a
                href="mailto:Zahiamir79@gmail.com"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                שלח/י הודעה
              </a>
            </artical>
            <artical className={styles.messenger}>
              <RiMessengerLine className="contact__option-icon" />
              <h4 className={styles.inner}>Messenger</h4>
              <h5 className={styles.inner}>אושרת אמיר</h5>
              <a
                href="https://m.me/profile.php?id=100049026332642"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                שלח/י הודעה
              </a>
            </artical>
            <artical className={styles.whatsapp}>
              <BsWhatsapp className="contact__option-icon" />
              <h4 className={styles.inner}>Whatsapp</h4>
              <h5 className={styles.inner}>0504-900-8044</h5>
              <a
                href="https://api.whatsapp.com/send?phone=05049008044"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                שלח/י הודעה
              </a>
            </artical>
          </div>
          <form className={styles.form} ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name=""
              placeholder="שמך המלא"
              required
              className={styles.input}
            />
            <input
              type="email"
              name="email"
              placeholder="אימייל"
              required
              className={styles.input}
            />
            <textarea
              className={styles.textarea}
              name="message"
              rows="7"
              placeholder="רשום הודעתך"
              required
            ></textarea>
            <button type="submit" className={styles.button}>
              שלח הודעה
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

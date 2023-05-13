import Head from "next/head";
import Main from "../components/Main";
import HowItWorks from "../components/HowItWorks";
import About from "../pages/About";
import Testimonials from "../pages/Testimonials";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>צדק | בית</title>
      </Head>
      <Main />
    </>
  );
}

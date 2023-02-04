import Typewriter from "typewriter-effect";
/*import Navbar from "./Navbar";*/
import styles from "../styles/Main.module.css";
import HowItWorks from "./HowItWorks";

const Main = () => {
    return ( 
        <>
        <main className={styles.wrapper}>
          <div className={styles.imageContainer}>
        <div
        className={styles.typewriter}
      >
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('"תנו לי לחבר בין הזכויות שלכם לחברת הביטוח"')
              .callFunction(() => {
                console.log("String typed out!");
              })
              .pauseFor(2500)
              .start();
          }}
        />
      </div>
      </div>
      <HowItWorks/>
      </main>
      </>
     );
}
 
export default Main;
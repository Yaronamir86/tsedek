import gsap from "gsap";
import styles from "../styles/Infos.module.scss";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Info = () => {
    
    gsap.registerPlugin(ScrollTrigger);

const q = gsap.utils.selector("#solution");
const tabs = q(".tab");

tabs.forEach((tab, i) => {
  const title = tab.querySelector(".title");
  const line = tab.querySelector(".line");
  const text = tab.querySelector(".text");
  const tl = gsap
    .timeline({
      scrollTrigger: {
        id: "tab" + i,
        trigger: tab,
        start: "center 85%",
        markers: true,
        end: "center 15%",
        toggleActions: "play reverse play reverse"
      }
    })
    .from(tab, {
      duration: 0.5,
      x: 100,
      opacity: 0,
      stagger: 0.25,
      ease: "back"
    })
    .from(title, {
      duration: 0.5,
      x: 100,
      opacity: 0,
      stagger: 0.45,
      ease: "power4"
    })
    .from(line, {
      duration: 0.5,
      width: "0%",
      opacity: 0,
      stagger: 0.45,
      ease: "power4"
    })
    .from(text, {
      duration: 0.25,
      y: 100,
      opacity: 0,
      stagger: 0.45,
      ease: "back"
    });
});

    return ( 
        <>
        <section className={StyleS.flex} id="welcome">
  <h1> 👋 GreenSocks </h1>
  <p>Scroll to next Section</p>
</section>

<section className={StyleS.flex} id="solution">

  <div className={styles.infos}>But want to have this</div>

  <div className={styles.tab} id="tab1">
    <div className={styles.title}>
      <h2>TAB</h2>
      <div className={styles.line}></div>
    </div>

    <div className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati alias enim molestiae. Cum accusamus aspernatur voluptate recusandae nostrum nam placeat magni dolorem, iure eligendi quod reprehenderit enim, at qui soluta!</div>
  </div>

  <div className={styles.tab} id="tab2">
    <div className={styles.title}>
      <h2>TAB</h2>
      <div className={styles.line}></div>
    </div>

    <div className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati alias enim molestiae. Cum accusamus aspernatur voluptate recusandae nostrum nam placeat magni dolorem, iure eligendi quod reprehenderit enim, at qui soluta!</div>
  </div>

  <div className={styles.tab} id="tab3">
    <div className={styles.title}>
      <h2>TAB</h2>
      <div className={styles.line}></div>
    </div>

    <div className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati alias enim molestiae. Cum accusamus aspernatur voluptate recusandae nostrum nam placeat magni dolorem, iure eligendi quod reprehenderit enim, at qui soluta!</div>
  </div>

  <div className={styles.tab} id="tab4">
    <div className={styles.title}>
      <h2>TAB</h2>
      <div className={styles.line}></div>
    </div>

    <div className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati alias enim molestiae. Cum accusamus aspernatur voluptate recusandae nostrum nam placeat magni dolorem, iure eligendi quod reprehenderit enim, at qui soluta!</div>
  </div>

</section>

<section className={StyleS.flex}>

  Thanks for Help

</section>
</>
     );
}
 
export default Info
;
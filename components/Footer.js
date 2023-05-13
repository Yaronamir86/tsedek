import Image from "next/image";
import styles from "../styles/Footer.module.css"
import { IoLogoWhatsapp} from "react-icons/io"
import { MdEmail} from "react-icons/md"
import { BsFacebook} from "react-icons/bs";

function Footer() {
  return (
    <div className={styles.content}>
      <div className={styles.socials}>
        <ul className={styles.socialList}>
          <li className={styles.socialLink}><IoLogoWhatsapp className={styles.linkIcon}/> 0504-900-8044</li>
          <li className={styles.socialLink}><MdEmail/> zhdek23@gmail.com</li>
          <li className={styles.socialLink}><BsFacebook /> your-facebook-page-url</li>
        </ul>
        <div>
          <Image src="/logoBright.png" alt="Logo" width={140}
  height={120} className={styles.image}/>
        </div>
      </div>
      <div className={styles.copyrights}>
        <p> {new Date().getFullYear()} yaron amir. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;

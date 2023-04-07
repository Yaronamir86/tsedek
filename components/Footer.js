import Image from "next/image";
import styles from "../styles/Footer.module.css"

function Footer() {
  return (
    <div className={styles.content}>
      <div className={styles.socials}>
        <div >
          <p style={{paddingBottom: "15px"}}>WhatsApp: 0504-900-8044</p>
          <p style={{paddingBottom: "15px"}}>Email: zhdek23@gmail.com</p>
          <p style={{paddingBottom: "15px"}}>Facebook: your-facebook-page-url</p>
        </div>
        <div>
          <Image src="./LogoWhite.svg" alt="Logo" width={160}
  height={120}/>
        </div>
      </div>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <p> {new Date().getFullYear()} yaron amir. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;

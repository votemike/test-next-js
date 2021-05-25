import Link from "next/link";
import styles from "../../styles/Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={`content ${styles.footerLinks}`}>
        <Link href="/about">
          <a className={styles.footerLink}>About</a>
        </Link>
        <Link href="/help">
          <a className={styles.footerLink}>Help</a>
        </Link>
        <Link href="/legal">
          <a className={styles.footerLink}>Legal</a>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;

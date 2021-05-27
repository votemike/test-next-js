import Link from "next/link";
import styles from "./Header.module.css";

function Header(props) {
  return (
    <header className={styles.header}>
      <div className="content">
         <Link href="/">
          <a className={styles.headerHomeLink}>Company Name</a>
        </Link>
 </div>
    </header>
  );
}

export default Header;

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";
import BurgerToggle from "../../atoms/BurgerToggle/BurgerToggle";

function Header() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`content ${styles.headerInner}`}>
        <div className={styles.logoAndBurger}>
          <Link href="/">
            <a className={styles.headerImageLink}>
              <Image
                src="https://deelay.me/2000/https://picsum.photos/400/200"
                alt="Logo"
                width={200}
                height={100}
              />
            </a>
          </Link>
          <button
            type="button"
            aria-label={navIsOpen ? "Close main menu" : "Open main menu"}
            className={styles.menuToggle}
            onClick={() => {
              setNavIsOpen(!navIsOpen);
            }}
          >
            <BurgerToggle showCloseIcon={navIsOpen} />
          </button>
        </div>
        <nav
          className={`${styles.nav} ${navIsOpen && styles.navIsOpen}`}
          role="navigation"
          aria-label="Main menu"
        >
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>

            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>

            <li>
              <Link href="/help">
                <a>Help</a>
              </Link>
            </li>

            <li>
              <Link href="/legal">
                <a>Legal</a>
              </Link>
            </li>
          </ul>
        </nav>
        {navIsOpen && (
          <div
            className={styles.backdrop}
            hidden
            aria-hidden="true"
            tabIndex="-1"
            onClick={() => {
              setNavIsOpen(false);
            }}
          />
        )}
      </div>
    </header>
  );
}

export default Header;

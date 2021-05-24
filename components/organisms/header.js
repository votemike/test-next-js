import Link from 'next/Link';
import Image from 'next/image'
import styles from '/styles/Header.module.css'
import burgerStyles from '/styles/BurgerMenu.module.css'
import {useState} from "react";
import BurgerMenu from "../atoms/burgerMenu";

// Make a mobile first menu with search bar, and accessible
// https://medium.com/@heyoka/responsive-pure-css-off-canvas-hamburger-menu-aebc8d11d793
// https://codepen.io/erikterwan/pen/EVzeRP

function Header(props) {
  const [navIsOpen, setNavIsOpen] = useState(false);

  // @TODO Switch out for :target pseudo-class https://medium.com/@heyoka/responsive-pure-css-off-canvas-hamburger-menu-aebc8d11d793
  return <header>
    <div className={`content ${styles.headerStyles}`}>
      <div className={styles.michael}>
        <Link href="/" className={styles.headerImage} >
         <a style={{width: '200px', height: '100px'}}>
           <Image src='https://deelay.me/2000/https://picsum.photos/400/200' alt="Logo" width={200} height={100}/>
         </a>
       </Link>
        <a className={styles.menuToggle} onClick={() => {setNavIsOpen(!navIsOpen)}}>
          <BurgerMenu showCloseIcon={navIsOpen}/>
        </a>
      </div>
      <nav id="main-menu" className={`${styles.mainMenu} ${navIsOpen ? styles.navIsOpen : ""}`} role="navigation">
        <ul className={styles.menu}>
          <a href="#"><li>Home</li></a>
          <a href="#"><li>About</li></a>
          <a href="#"><li>Info</li></a>
          <a href="#"><li>Contact</li></a>
          <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
        </ul>
      </nav>
      {/*<a href="#main-menu-toggle" className="backdrop" hidden></a>*/}
    </div>
  </header>;
  // return <header>
  //   <a href="#main-menu"
  //      id="main-menu-toggle"
  //      className={styles.menuToggle}
  //      aria-label="Open main menu">
  //     <span className={styles.srOnly}>Open main menu</span>
  //     <span className={styles.burger} aria-hidden="true"></span>
  //     <span className={styles.burger} aria-hidden="true"></span>
  //     <span className={styles.burger} aria-hidden="true"></span>
  //   </a>
  //
  //   <h1 className={styles.logo}>hamburgers</h1>
  //
  //   <nav id="main-menu" className={styles.mainMenu} aria-label="Main menu">
  //     <a href="#main-menu-toggle"
  //        id="main-menu-close"
  //        className={styles.menuClose}
  //        aria-label="Close main menu">
  //       <span className={styles.srOnly}>Close main menu</span>
  //       <span className={styles.fa} className={styles.faClose} aria-hidden="true"></span>
  //     </a>
  //     <ul>
  //       <li><a href="#">Products</a></li>
  //       <li><a href="#">About</a></li>
  //       <li><a href="#">Contact</a></li>
  //     </ul>
  //   </nav>
  //   <a href="#main-menu-toggle"
  //      className={styles.backdrop}
  //      tabIndex="-1"
  //      aria-hidden="true" hidden></a>
  // </header>;
  // return <header>
  //   <div className='content'>
  //     <nav>
  //       <Link href="/" className={styles.headerImage}>
  //         <a>
  //           <Image src='https://deelay.me/2000/https://picsum.photos/400/200' alt="Logo" width='200' height='100'/>
  //         </a>
  //       </Link>
  //       <ul>
  //         <li>Static Page</li>
  //         <li>Dynamic Page</li>
  //         <li>Link 3</li>
  //       </ul>
  //       <form>
  //         <div>
  //           <input type="search" id="mySearch" name="q"/>
  //           <button>Search</button>
  //         </div>
  //       </form>
  //     </nav>
  //   </div>
  // </header>;
}
export default Header;

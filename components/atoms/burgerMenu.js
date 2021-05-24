import styles from "/styles/BurgerMenu.module.css";

function BurgerMenu({showCloseIcon}) {
  return <div className={`${showCloseIcon ? styles.opened : ""}`}>
    <span className={styles.burgerSpan}></span>
    <span className={styles.burgerSpan}></span>
    <span className={styles.burgerSpan}></span>
  </div>;
}
export default BurgerMenu;

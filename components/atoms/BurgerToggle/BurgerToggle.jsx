import styles from "./BurgerToggle.module.css";

function BurgerToggle({ showCloseIcon }) {
  return (
    <div className={`${showCloseIcon ? styles.opened : ""}`}>
      <span className={styles.srOnly}>Open main menu</span>
      <span className={styles.burgerSpan} aria-hidden="true" />
      <span className={styles.burgerSpan} aria-hidden="true" />
      <span className={styles.burgerSpan} aria-hidden="true" />
    </div>
  );
}

export default BurgerToggle;

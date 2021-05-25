import styles from "../../styles/BurgerToggle.module.css";

function BurgerToggle({ showCloseIcon }) {
  return (
    <div className={`${showCloseIcon ? styles.opened : ""}`}>
      <span className={styles.burgerSpan} />
      <span className={styles.burgerSpan} />
      <span className={styles.burgerSpan} />
    </div>
  );
}

export default BurgerToggle;

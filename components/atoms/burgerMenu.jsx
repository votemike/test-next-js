import styles from "../../styles/BurgerMenu.module.css";

function BurgerMenu({ showCloseIcon }) {
  return (
    <div className={`${showCloseIcon ? styles.opened : ""}`}>
      <span className={styles.burgerSpan} />
      <span className={styles.burgerSpan} />
      <span className={styles.burgerSpan} />
    </div>
  );
}

export default BurgerMenu;

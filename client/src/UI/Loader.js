import styles from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
    <div className={`${styles.canvas} ${styles.canvas1}`}>
      <div className={`${styles.spinner1} ${styles.spinnerMax}`}>
        <div className={`${styles.spinner1} ${styles.spinnerMid}`}>
          <div
            className={`
        ${styles.spinner1} ${styles.spinnerMin}`}></div>
        </div>
      </div>
    </div>
    </div>
    
  );
};
export default Loader;

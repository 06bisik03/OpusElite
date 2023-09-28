import styles from "./ProgressBar.module.css";
const ProgressBar = ({ step }) => {
  const steps = ["Address Data", "Payment", "Summary"];
  return (
    <div>
      <ol className={styles.progressBar}>
        <li className={step > 0 ? styles.doneStep : styles.activeStep}>
          {steps[0]}
        </li>
        <li
          className={
            step > 1
              ? styles.doneStep
              : step === 1
              ? styles.activeStep
              : styles.todoStep
          }>
          {steps[1]}
        </li>
        <li className={step === 2 ? styles.doneStep : styles.todoStep}>
          {steps[2]}
        </li>
      </ol>
    </div>
  );
};
export default ProgressBar;

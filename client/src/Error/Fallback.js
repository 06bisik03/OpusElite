import styles from "./Fallback.module.css";
const Fallback = () => {
  return (
    <div className={styles.fallbackContainer}>
      <div className={styles.sadFace}/>
      <div className={styles.code}>404</div>
      <div className={styles.error}>
        Oops. A problem has occured.
        <button onClick={() => {
            window.location.href= "/"
        }}>
            
          <div className={styles.text}>
            <span>Back</span>
            <span>to</span>
            <span>Homepage</span>
          </div>
          <div className={styles.clone}>
            <span>Back</span>
            <span>to</span>
            <span>Homepage</span>
          </div>
          <svg
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
export default Fallback;

import styles from "./Recommendations.module.css";

const Recommendations = () => {
  return (
    <div className={styles.recommendationsContainer}>
      <div className={`${styles.recommendation} ${styles.suit}`}>
        <div className={styles.img} />
        <div className={styles.text}>
          <div>
            The Suit may not make the man, however OpusElite defines true
            character
          </div>
          <div>
            <a href="/choosing/suit">Choosing the right Suit</a>
            <i class="fa-solid fa-chevron-right" styles="color: #000000;"></i>
          </div>
        </div>
      </div>
      <div className={`${styles.recommendation} ${styles.scent}`}>
        <div className={styles.img2} />
        <div className={styles.text}>
          <div>
            Crafting impressions through scents: your personal fragrance
            journey.
          </div>
          <div>
            <a href="/choosing/scent">Choosing the right Scent</a>
            <i class="fa-solid fa-chevron-right" styles="color: #000000;"></i>
          </div>
        </div>
      </div>
      <div className={`${styles.recommendation} ${styles.tailor}`}>
        <div className={styles.img3} />
        <div className={styles.text}>
          <div>
            We are not just tailors, but master artisans, sculpting elegance
            with every stitch.
          </div>
          <div>
            <a href="/choosing/tailor">Choosing the right Tailor</a>
            <i class="fa-solid fa-chevron-right" styles="color: #000000;"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Recommendations;

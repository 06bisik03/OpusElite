import styles from "./Praise.module.css";
import { Link } from "react-router-dom";
const Praise = () => {
  return (
    <div className={styles.praiseContainer}>
      <div className={styles.praiseWords}>
        <div className={styles.textBox}>
          <div className={styles.title}>Elegance is not a luxury</div>
          <div className={styles.text}>
            The best suits and shoes - made from Italian leather and material
            and peak craftsmanship
          </div>
          <div className={styles.more}>
            <Link>Explore More</Link>
            <i class="fa-solid fa-chevron-right" styles="color: #000000;"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Praise;

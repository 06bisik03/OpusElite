import { useEffect, useState } from "react";
import styles from "./Slogan.module.css";


const Slogan = ({ slideCompleted }) => {
  const [sloganSlide, setSloganSlide] = useState(false);
  useEffect(() => {
    if (slideCompleted) {
      setTimeout(() => {
        setSloganSlide(true);
      }, 1500);
    }
  }, [slideCompleted]);
  return (
    <div className={styles.sloganContainer}>
      <div
        className={`${styles.slogan} ${sloganSlide ? styles.slideIn : ""} ${
          sloganSlide ? styles.visible : ""
        }`}>
        <div className={styles.ad}>
          <div>OPUSELITE TAILORS</div>
          <div>
            In Pursuit of Excellence Suits of Elite Class <br />
            Peak Craftsmanship <br />
          </div>
          <div>
            <a href="/opuselite">Explore More </a>
            <i className="fa-solid fa-chevron-right" styles="color: #000000;"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Slogan;

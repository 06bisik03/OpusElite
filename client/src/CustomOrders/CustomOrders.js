import styles from "./CustomOrders.module.css";

import { useEffect, useRef, useState } from "react";
import Choices from "./Choices";
import axios from "axios";
const CustomOrder = () => {
  const [isSlidingDown, setIsSlidingDown] = useState(false);
  const [sloganSlide, setSloganSlide] = useState(false);
  const choices = useRef(null);
  useEffect(() => {
    const refreshMarketData = async () => {
      await axios.get("https://localhost:8000/custom/suits");
      await axios.get("https://localhost:8000/custom/shoes");
    };
    refreshMarketData();
  });
  const scrollToMotive = () => {
    if (choices.current) {
      choices.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    setSloganSlide(true);
    setTimeout(() => {
      setIsSlidingDown(true);
    }, 1500);
  }, []);
  return (
    <div className={styles.customOrderContainer}>
      <div className={styles.intro}>
        <div
          className={`${styles.customOrder} ${
            sloganSlide ? styles.slideIn : ""
          } ${sloganSlide ? styles.visible : ""}`}>
          <div
            className={`${styles.details} ${
              isSlidingDown ? styles.slideDown : ""
            } ${isSlidingDown ? styles.visibleAd : ""}`}>
            <div className={styles.ad}>
              <div>OPUSELITE CUSTOMS</div>
              <div>OpusElite Customs: Where Every Suit is a Masterpiece</div>
              <div>
                <button onClick={scrollToMotive}>OpusElite Customs</button>
                <i
                  className="fa-solid fa-chevron-right"
                  styles="color: #000000;"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="choices" ref={choices}>
        <Choices />
      </div>
    </div>
  );
};
export default CustomOrder;

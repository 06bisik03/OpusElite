import Navbar from "../UI/Navbar";
import Footer from "../Welcome/WelcomePageUI/Footer";
import styles from "./Extras.module.css";
import { useState, useEffect,useRef } from "react";

const ChoosingSuit = () => {
  const [sloganSlide, setSloganSlide] = useState(false);
  const [imageSlide, setImageSlide] = useState(false);
  const learn = useRef(null);
  const scrollToMotive = () => {
      if (learn.current) {
        learn.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
  useEffect(() => {
    setImageSlide(true);
    setTimeout(() => {
      setSloganSlide(true);
    }, 1500);
  }, []);
  return (
    <div className={styles.choicesContainer}>
      <div>
        <Navbar />
      </div>
      <div className={styles.details}>
        <div
          className={` ${styles.imageBack} ${
            imageSlide ? styles.slideIn : ""
          } ${imageSlide ? styles.visible : ""}`}>
          <div
            className={`${styles.slogan} ${
              sloganSlide ? styles.slideDown : ""
            } ${sloganSlide ? styles.visibleSlogan : ""} `}>
            <div className={styles.ad}>
              <div>How to choose the right suit every time</div>
              <div>
                <button onClick={scrollToMotive}>Learn more </button>
                <i
                  className="fa-solid fa-chevron-right"
                  styles="color: #000000;"></i>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.learn} id="learn" ref={learn}>
          <div>
            <div>
              <img alt="_"src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" />
            </div>

            <div>
              Suits are undoubtedly one of the most iconic and versatile fashion
              ensembles in a man's wardrobe. They exude class, sophistication,
              and timeless style. A well-fitted suit can make a powerful
              statement, whether it's for a formal occasion, a business meeting,
              or a special event. Let's craft a similar text emphasizing the
              importance of suits:
            </div>
          </div>
          <div>
            <div>
              Selecting the right suit begins with considering the occasion. For
              formal events, like weddings or business meetings, opt for classic
              colors such as navy, charcoal gray, or black. These versatile
              shades exude professionalism and can be worn for various purposes.
              If you're aiming for a more casual or semi-formal look, lighter
              colors like light gray, khaki, or even shades of blue can be
              excellent choices. Remember that the color of your suit should
              complement your skin tone, so take time to determine what shades
              best enhance your appearance.
            </div>
            <div>
              <img alt="_"src="https://images.unsplash.com/photo-1491336477066-31156b5e4f35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
            </div>
          </div>
          <div>
            <div>
              <img alt="_"src="https://plus.unsplash.com/premium_photo-1667520252977-6993a54bd578?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
            </div>
            <div>
              The fit of your suit is absolutely critical. A well-tailored suit
              can elevate your style significantly. Prioritize a slim, tailored
              fit that flatters your body shape without being too tight. Pay
              attention to the jacket's shoulders, ensuring they align with your
              natural shoulder line. The jacket should comfortably close without
              excessive pulling or wrinkling when buttoned. The trousers should
              sit at your natural waist and break slightly at the shoe, creating
              a clean and polished look. Don't hesitate to invest in
              professional tailoring to achieve the perfect fit; it's a small
              expense that makes a world of difference in your overall
              appearance.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ChoosingSuit;

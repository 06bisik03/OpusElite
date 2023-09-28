import styles from "./Extras.module.css";
import Navbar from "../UI/Navbar";
import { useState, useEffect,useRef } from "react";
import Footer from "../Welcome/WelcomePageUI/Footer";
const ChoosingScent = () => {
  const [sloganSlide, setSloganSlide] = useState(false);
  const [imageSlide, setImageSlide] = useState(false);
  const learn = useRef(null);
  const scrollToMotive = () => {
    if (learn.current) {
      learn.current.scrollIntoView({ behavior: "smooth" });
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
          className={` ${styles.imageBackScent} ${
            imageSlide ? styles.slideIn : ""
          } ${imageSlide ? styles.visible : ""}`}>
          <div
            className={`${styles.slogan} ${
              sloganSlide ? styles.slideDown : ""
            } ${sloganSlide ? styles.visibleSlogan : ""} `}>
            <div className={styles.ad}>
              <div>How to choose the perfect scent</div>
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
              <img alt="_"src="https://img.freepik.com/premium-photo/man-hand-perfume_218381-1020.jpg?w=826" />
            </div>

            <div>
              Fragrance is a captivating and integral aspect of personal style.
              Much like a well-tailored suit, the right scent can leave a
              lasting impression, reflecting your personality and enhancing your
              overall presence. It's a powerful accessory that should align with
              both the occasion and your individual preferences. Whether you're
              preparing for a formal event, a romantic rendezvous, or everyday
              wear, choosing the appropriate fragrance is an art that can define
              your identity and evoke emotions in those around you.
            </div>
          </div>
          <div>
            <div>
              Selecting the perfect fragrance begins with considering the
              occasion and the scent profile that resonates with it. For formal
              or professional settings, lean towards subtle and sophisticated
              scents with notes of woody, musky, or spicy elements. These
              fragrances exude elegance and confidence. For casual outings or
              daytime wear, opt for lighter and fresher scents featuring citrus,
              floral, or aquatic notes, creating a more relaxed and approachable
              aura. Remember, a fragrance should enhance your mood and
              complement the atmosphere, so choose accordingly.
            </div>
            <div>
              <img alt="_"src="https://img.freepik.com/premium-photo/handsome-young-man-using-perfume_160204-2296.jpg?w=826" />
            </div>
          </div>
          <div>
            <div>
              <img alt="_"src="https://img.freepik.com/premium-photo/young-man-with-bottle-perfume-closeup_392895-326301.jpg?w=826" />
            </div>
            <div>
              Just as the fit of a suit matters, the chemistry between your skin
              and a fragrance is crucial. Scents can smell different on each
              individual due to skin chemistry, so it's essential to test a
              fragrance on your skin before committing. Allow it to settle for a
              few hours to determine if it still appeals to your senses.
              Furthermore, consider the longevity of the fragrance. High-quality
              scents tend to last longer, sparing you the need for frequent
              reapplication. When investing in a fragrance, it's worth exploring
              various options, seeking the advice of professionals, and taking
              your time to find the one that perfectly encapsulates your
              essence.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ChoosingScent;

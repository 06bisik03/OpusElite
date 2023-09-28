import styles from "./Extras.module.css";
import Navbar from "../UI/Navbar";
import { useState, useEffect} from "react";
import { useRef } from "react";
import Footer from "../Welcome/WelcomePageUI/Footer";
const ChoosingTailor = () => {
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
          className={` ${styles.imageBackTailor} ${
            imageSlide ? styles.slideIn : ""
          } ${imageSlide ? styles.visible : ""}`}>
          <div
            className={`${styles.slogan} ${
              sloganSlide ? styles.slideDown : ""
            } ${sloganSlide ? styles.visibleSlogan : ""} `}>
            <div className={styles.ad}>
              <div>Choosing the right tailor</div>
              <div>
                <button onClick={scrollToMotive}>Learn more </button>
                <i
                  className="fa-solid fa-chevron-right"
                  styles="color: #000000;"></i>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.learn} ref={learn} id="learn">
          <div>
            <div>
              <img alt="_"src="https://wallpapercave.com/wp/wp3751572.jpg" />
            </div>

            <div>
              Selecting the right tailor is like discovering an artist who can
              turn fabric into a work of art. A skilled tailor elevates your
              attire with precision, attention to detail, and an understanding
              of fabric and design. Whether it's for a special event, a business
              meeting, or everyday confidence, your choice of a tailor is
              crucial for a perfect fit and a sophisticated look.
            </div>
          </div>
          <div>
            <div>
              Selecting the ideal tailor begins with evaluating their expertise
              and specialization. Not all tailors are the same, and their skills
              may align with different styles and types of suits. Some
              specialize in classic and formal attire, while others excel in
              contemporary or bespoke designs. It's essential to communicate
              your preferences and expectations clearly. Look for a tailor with
              a reputation for exceptional craftsmanship, a keen eye for fit,
              and a portfolio that showcases their versatility. Additionally,
              consider their experience in handling different fabrics, as this
              is crucial for creating suits suitable for various occasions and
              climates.
            </div>
            <div>
              <img alt="_"src="https://wallpapercave.com/wp/wp3751594.jpg" />
            </div>
          </div>
          <div>
            <div>
              <img alt="_"src="https://wallpapercrafter.com/desktop/230708-hand-person-tailor-and-man-hd.jpg" />
            </div>
            <div>
              Much like selecting the right fragrance and suit, finding the
              perfect tailor hinges on effective communication. During the
              initial consultation, discuss your style, body measurements, and
              suit preferences. A good tailor listens attentively, offers
              valuable insights based on your physique and occasion, and
              accommodates your requests. Building a rapport with your tailor
              fosters trust, ensuring your suit becomes a personalized extension
              of your style and identity.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ChoosingTailor;

import Footer from "../Welcome/WelcomePageUI/Footer";
import Recommendations from "../Welcome/WelcomePageUI/Recommendations";

import styles from "./Motive.module.css";
const Motive = () => {
  return (
    <div className={styles.motiveContainer}>
      <div className={styles.motive1}>
        <div>
          OpusElite, the pinnacle of sartorial excellence, is a distinguished
          Italy-based family establishment that has flourished organically from
          its Italy roots. Our founder Baris Ekin ISIK's indelible legacy serves
          as the cornerstone of our brand, continually guiding and inspiring our
          pursuit of perfection.
        </div>

        <div>
          OpusElite is renowned for crafting the epitome of fine tailoring,
          reflecting an unwavering commitment to unsurpassed quality, timeless
          elegance, unwavering authenticity, and the embodiment of refined
          living. Rooted in an ethos of simplicity, OpusElite is dedicated to
          sharing the profound joy derived from life's most beautiful moments.
          Through our meticulously crafted super elite suits, we extend the
          spirit of opulence and refinement to connoisseurs worldwide, elevating
          the art of bespoke tailoring to unparalleled heights.
        </div>
      </div>
      <div className={styles.pic}></div>
      <div className={styles.motive2}>
        <div>
          OpusElite embodies sartorial excellence, timeless style, luxury
          living, humility, and a zest for life. Our founder's spirit lives on
          through like-minded individuals worldwide who appreciate our exquisite
          offerings.
        </div>
        <div>
          "Elegance in every stitch, opulence in every thread. This is the
          tapestry of OpusElite's legacy."
          <div>- Baris Ekin ISIK, OpusElite</div>
        </div>
        <div >
          <div>
            We cordially invite you to indulge in the contemporary opulence of
            OpusElite. Our curated selection embodies a fusion of masterful
            craftsmanship, unwavering dedication, and refined elegance. Just as
            in the OpusElite realm, pure sophistication transcends the bounds of
            time.
          </div>
          <div>
            Our enduring ethos, inspired by the timeless philosophy of our
            esteemed founder, defines the essence of our brand. We hold in high
            regard a discerning appreciation for life's finest pleasures, an
            open-hearted perspective, and a commitment to generously sharing the
            joys of existence.
          </div>

          <div>
            Today, our distinguished portfolio features some of the world's most
            exquisite offerings, meticulously sourced from across the globe to
            grace the lives of individuals worldwide. From impeccably tailored
            suits and luxurious footwear to enchanting fragrances, OpusElite is
            your gateway to the art of refined living. 
          </div>
        </div>
      </div>
      <div className={styles.motive3}>
            <Recommendations />
      </div>
      <Footer />
    </div>
  );
};
export default Motive;

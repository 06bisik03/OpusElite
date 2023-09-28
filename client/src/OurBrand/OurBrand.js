import Navbar from '../UI/Navbar';
import styles from './OurBrand.module.css';
import Motive from './Motive';
import { useRef } from 'react';
const OurBrand = () => {
    const motiveRef = useRef(null);
    const scrollToMotive = () => {
        if (motiveRef.current) {
          motiveRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };
    return (
        <div className={styles.ourBrandContainer}>
            <div className={styles.intro}>
                <Navbar />
                <div className={styles.introImg}>

                </div>
                <div className={styles.scrollerCont}>
                    
                <button className={styles.scroller} onClick={scrollToMotive}>Explore<i className="fa-solid fa-chevron-down"></i></button>
                
                </div>
            </div>
            <div ref={motiveRef} id="motive">
                <Motive />
            </div>

        </div>
    )
}
export default OurBrand;
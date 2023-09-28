import styles from "./Introduction.module.css";
import { Link } from "react-router-dom";
const Introduction = () => {
  return (
    <div className={styles.introductionContainer}>
      <div className={styles.founder}> 
        <div className={styles.img}></div>
      </div>
      
      <div className={styles.text}>
        <div className={styles.introductionText}>
            <div className={styles.op1}>OPUSELITE</div>
            <div className={styles.op2}>
             We craft more than just suits; we create personalized works of art that redefine luxury.
            </div>
            <div className={styles.op3}>Every stitch is a testament to our dedication to perfection, blending traditional craftsmanship with avant-garde design. Our creations mirror the audacious spirit of those who wear them, encapsulating the essence of opulence.</div>
            <div className={styles.op4}> <Link>Explore More</Link>
            <i class="fa-solid fa-chevron-right" styles="color: #000000;"></i></div>
        </div>
      </div>
    </div>
  );
};
export default Introduction;

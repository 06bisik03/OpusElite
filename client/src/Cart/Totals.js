import { useState,useEffect } from "react";
import styles from "./Totals.module.css";
import { Link } from "react-router-dom";
const Totals = ({subtotals}) => {
    const [total,setTotal] = useState(0);
    const [shipping, setShipping] = useState('standard')
    useEffect(() => {
      if(subtotals < 1000 && subtotals > 0) {
        setTotal(subtotals + 59.99);
      } else {
        setTotal(subtotals)
      }
    },[subtotals]);


  return (
    <div className={styles.totalsContainer}>
      <div className={styles.totals}>
        <div>Cart Totals</div>
        <div className={styles.subtotal}>
          <div>Total</div>
          <div>${subtotals.toFixed(2)}</div>
        </div>
        <div className={styles.shipping}>
          <div>Shipping</div>
          <div className={styles.details}>
            <div className={styles.radioButtons}>
              <label className={styles.radioButton}>
                <input type="radio" name="option" value="standard" defaultChecked onClick={() => setShipping('standard')}/>
                <div className={styles.radioCircle}></div>
                <span className={styles.radioLabel}>Standard Shipping</span>
              </label>
              <label className={styles.radioButton}>
                <input type="radio" name="option" value="plus" onClick={() => setShipping('opuseliteplus')}/>
                <div className={styles.radioCircle}></div>
                <span className={styles.radioLabel}>OpusElite Plus</span>
              </label>
              <label className={styles.radioButton}>
                <input type="radio" name="option" value="pickup" onClick={() => setShipping('pickup')}/>
                <div className={styles.radioCircle}></div>
                <span className={styles.radioLabel}>Personal Pickup</span>
              </label>
            </div>
            <div className={styles.poss}>
                <Link>Shipping possibilities </Link></div>
          </div>
        </div>
        <div className={styles.total}>
          <div>Total</div>
          <div>${total.toFixed(2)}</div>
        </div>
        <div className={styles.checkout}>
          <Link to="/checkout" state={{shipmentMethod: shipping}}>
          <i class="fa-solid fa-credit-card" styles={{color: "#ffffff;"}}/>
          Proceed to checkout
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Totals;

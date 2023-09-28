import styles from "./Checkout.module.css";
import Navbar from "../UI/Navbar";
import ProgressBar from "./ProgressBar";
import Forms from "./Forms";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import Loader from "../UI/Loader";

const Checkout = () => {
  const [step, setStep] = useState(0);

  const location = useLocation();
  const {shipmentMethod} = location.state ? location.state : false;
if(shipmentMethod) {
  return (
    <div className={styles.checkoutContainer}>
      <Navbar />
      <div className={styles.checkout}>
        <div className={styles.bubbles}>
            <ProgressBar step={step} />
        </div>
        <div className={styles.details}>
            <Forms  passStep={setStep} shipmentMethod={shipmentMethod}/>
        </div>
      </div>
    </div>
  );
} else {
  return <Loader />
}
};
export default Checkout;

import styles from "./Forms.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UseTransactionFinalize from "../Hooks/UseTransactionFinalize";
import UseCartAndTotal from "../Hooks/UseCartAndTotal";
import Loader from "../UI/Loader";
const Forms = ({ passStep, shipmentMethod }) => {
  const [step, setStep] = useState(0);
  const [progressStep, setProgressStep] = useState(0);
  const [addressForm, setAddressForm] = useState(null);
  const [cardForm, setCardForm] = useState(null);
  const [serverResponse, setServerResponse] = useState(false);

  useEffect(() => {
    const finalizeTransaction = async () => {
      const trs_data = {
        ...addressForm,
        ...cardForm,
        trs_shipment_method: shipmentMethod,
      };

      const trs = await UseTransactionFinalize(trs_data);
      return trs;
    };

    const finalizing = async () => {
      const responseServer = await finalizeTransaction();
      console.log(responseServer);
      if (responseServer.status === 200) {
        setServerResponse(true);
      }
    };
    if (step === 2) {
      finalizing();
    }
  }, [step,addressForm,cardForm,shipmentMethod]);
  useEffect(() => {
    passStep(progressStep);
  }, [progressStep, passStep]);

  const addressSubmission = (e) => {
    e.preventDefault();
    const trs_address_form = {
      trs_first_name: e.target.elements.firstname.value,
      trs_last_name: e.target.elements.lastname.value,
      trs_postal_code: e.target.elements.postalcode.value,
      trs_addressbox1: e.target.elements.addressbox1.value,
      trs_addressbox2: e.target.elements?.addressbox2.value,
      trs_city: e.target.elements.city.value,
      trs_state: e.target.elements.state.value,
      trs_country: e.target.elements.country.value,
      trs_phone_number: e.target.elements.phonenumber.value,
      trs_instructions: e.target.elements?.instructions.value,
    };

    setAddressForm(trs_address_form);
  };
  const cardSubmission = (e) => {
    e.preventDefault();
    const trs_card_form = {
      trs_card_number: e.target.elements.cardnumber.value,
      trs_expiry_date: e.target.elements.expirydate.value,
      trs_cardholder_name: e.target.elements.cardholder.value,
    };
    setCardForm(trs_card_form);
  };

  const steps = [
    <AddressForm
      stepToOne={() => setStep(1)}
      progressStep={setProgressStep}
      submitAddressForm={addressSubmission}
    />,
    <PaymentForm
      shipmentMethod={shipmentMethod}
      stepToNull={() => setStep(0)}
      progressStep={setProgressStep}
      submitCardForm={cardSubmission}
      stepToTwo={() => setStep(2)}
    />,
    <Summary finalization={serverResponse} progressStep={setProgressStep} />,
  ];
  return <div className={styles.formsContainer}>{steps[step]}</div>;
};
export default Forms;

const AddressForm = ({ stepToOne, submitAddressForm, progressStep }) => {
  useEffect(() => {
    progressStep(0);
  }, [progressStep]);
  return (
    <form
      className={`${styles.addressForm} ${styles.form}`}
      autoComplete="off"
      onSubmit={(e) => {
        submitAddressForm(e);
        stepToOne();
      }}>
      <div className={styles.leftAddress}>
        <input name="firstname" placeholder="First Name" required />
        <input name="lastname" placeholder="Last Name" required />
        <input name="postalcode" placeholder="Postal Code" required />
        <input name="addressbox1" placeholder="Address Box 1" required />
        <input name="addressbox2" placeholder="Address Box 2(Optional)" />
        <input name="city" placeholder="City" required />
        <input name="state" placeholder="State" required />
        <input name="country" placeholder="Country" required />
        <input
          name="phonenumber"
          type="number"
          placeholder="Phone Number"
          required
        />
      </div>
      <div className={styles.rightAddress}>
        <div className={styles.textAddress}>
          <div className={styles.title}>Instructions before delivery</div>
          <textarea
            name="instructions"
            type="textfield"
            placeholder="Desires before delivery"
            maxLength="120"
          />
        </div>

        <div className={styles.nextAdd}>
          <button type="submit">
            Next
            <i
              class="fa-solid fa-arrow-right-long"
              styles="color: #ffffff;"></i>
          </button>
        </div>
      </div>
    </form>
  );
};

const PaymentForm = ({
  shipmentMethod,
  stepToNull,
  stepToTwo,
  submitCardForm,
  progressStep,
}) => {
  const [cart, setCart] = useState(null);
  const [cartTotal, setCartTotal] = useState(null);
  const [shipmentTotal, setShipmentTotal] = useState(0);
  useEffect(() => {
    progressStep(1);
    const fetchCart = async () => {
      const [cart, cartTotal] = await UseCartAndTotal();
      setCart(cart);
      setCartTotal(cartTotal);
      if (shipmentMethod === "standard") {
        setShipmentTotal(cartTotal < 1000 ? 59.99 : 0);
      }
    };
    fetchCart();
  }, [progressStep, shipmentMethod]);
  if (cart && cartTotal) {
    return (
      <div className={styles.paymentForm}>
        <form
          id="paymentform"
          className={styles.leftForm}
          onSubmit={(e) => {
            submitCardForm(e);
            stepToTwo();
          }}>
          <div>Card Details</div>
          <input
            name="cardnumber"
            minLength={16}
            type="number"
            placeholder="Card Number"
            required
          />
          <input
            name="expirydate"
            placeholder="Expiry Date"
            type="month"
            required
          />
          <input
            name="cardholder"
            type="text"
            placeholder="Cardholder Name"
            required
          />
        </form>
        <div className={styles.rightForm}>
          <div className={styles.summaryForm}>
            <div>Purchase Summary</div>
            <div>
              <>Cart Subtotal: </>
              <div>${cartTotal.toFixed(2)}</div>
            </div>
            <div>
              <>Shipping Subtotal:</>
              <div>${shipmentTotal.toFixed(2)}</div>
            </div>
            <div>
              <>Total:</>
              <div>${(+cartTotal + shipmentTotal).toFixed(2)}</div>
            </div>
          </div>
          <div className={styles.nextAdd2}>
            <button className={styles.backward} onClick={stepToNull}>
              <i
                class="fa-solid fa-arrow-left-long"
                styles="color: #ffffff;"></i>
              Back
            </button>
            <button className={styles.forward} form="paymentform" type="submit">
              Next
              <i
                class="fa-solid fa-arrow-right-long"
                styles="color: #ffffff;"></i>
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <Loader />;
  }
};

const Summary = ({ finalization, progressStep }) => {
  const [renderSummary, setRenderSummary] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRenderSummary(true);
      progressStep(2);
    }, 3000);

    return () => clearTimeout(timer);
  }, [progressStep]);

  if (finalization && renderSummary) {
    return (
      <div className={styles.summaryContainer}>
        <div className={styles.summary}>
          <div className={styles.wrapper}>
            <svg
              class={styles.checkmark}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52">
              <circle
                className={styles.checkmarkCircle}
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                className={styles.checkmarkCheck}
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
          </div>
          <div className={styles.sumText}>
            Payment was successful. Your order is being prepared for shipment.
          </div>
        </div>
        <div className={styles.nextAdd3}>
          <Link className={styles.backHomepage} to="/">
            Back to Homepage
          </Link>
        </div>
      </div>
    );
  } else {
    return <Loader />;
  }
};

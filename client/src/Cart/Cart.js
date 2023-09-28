import styles from "./Cart.module.css";
import Navbar from "../UI/Navbar";
import Products from "./Products";
import Totals from "./Totals";
import { useEffect, useState } from "react";


import UseCartAndTotal from "../Hooks/UseCartAndTotal";
import Loader from "../UI/Loader";


const Cart = () => {
  const [cart, setCart] = useState(null);
  const [subtotal, setTotal] = useState(null);
  const [forceUpdate,setForceUpdate]= useState(false);

  useEffect(() => {
    const fetchCart = async () => {
      const [userCartElements, subtotality ]= await UseCartAndTotal()
      if(!userCartElements && !subtotality) {
        window.location.href="/profile"
      }
      setCart(userCartElements);
      setTotal(subtotality);  
    };
    fetchCart();
  }, [forceUpdate]);

  if (!cart) {
    return <Loader />
  }
    return (
      <div className={styles.cartContainer}>
        <Navbar />
        <div className={styles.cart}>
          <div className={styles.cartProducts}>
            <Products cart={cart} forceUpdate={() => setForceUpdate(!forceUpdate)}/>
          </div>

          <Totals subtotals={subtotal} />
        </div>
      </div>
    );
 
};
export default Cart;

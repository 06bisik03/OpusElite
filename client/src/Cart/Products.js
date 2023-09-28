import { useEffect,useState} from "react";

import CartProduct from "./CartProduct";
import styles from "./Products.module.css";
const Products = ({cart, forceUpdate}) => {
  const [itemCart, setItemCart] = useState(null);
  useEffect(() => {
    console.log(cart.length);
    setItemCart([...cart]);
  },[cart]);

if(itemCart) {
  console.log(itemCart);
  return (
    <div className={styles.productsContainer}>
      <div className={styles.products}>
        <div>Shopping Cart</div>
        <div className={styles.table}>
          <div className={styles.titleContainer}>
            <div className={styles.headers}>
              <div>Product</div>
              <div>Price</div>
              <div>Size/Vol.</div>
              <div>Subtotal</div>
            </div>
          </div>

          <div className={styles.productList}>
              <div className={styles.productsC}>
                {itemCart.map((product,index) => {
                  return <CartProduct forceUpdate={forceUpdate} product={product} key={index} />;
                })}

              </div>
             
          </div>
        </div>
        <div className={styles.coupon}>
          <div className={styles.inputGroup}>
            <input
              type="email"
              className={styles.input}
              id="Email"
              name="Email"
              placeholder="Coupon Code"
              autocomplete="off"
            />
            <input
              className={styles.buttonSubmit}
              value="Apply Code"
              type="submit"
            />
          </div>
        </div>
      </div>
    </div>
  );
              }
};
export default Products;

import UseCheckLog from "../Hooks/UseCheckLog";
import UsePostData from "../Hooks/UsePostData";
import styles from "./CartProduct.module.css";

const CartProduct = ({ product, forceUpdate }) => {


  const decrementItemHandler = async () => {
    const user = await UseCheckLog();
    const currentUser = user.data.user_id;
    await UsePostData(product.product_id, currentUser, "removeItem");
    forceUpdate();
  };
  if (product) {
    return (
      <div className={styles.cartProductContainer}>
        <div className={styles.deleteBtn}>
          <button
            type="button"
            onClick={decrementItemHandler}
            className={styles.btnClose}>
            X
          </button>
        </div>
        <div className={styles.productImg}>
          <img src={product.product_images[0]} alt="_"/>
        </div>
        <div className={styles.productName}>{product.product_amount}x {product.product_name}</div>
        <div className={styles.price}>${product.product_price.toFixed(2)}</div>
        <div className={styles.amount}>{product.product_size}</div>
        <div className={styles.subtotal}>
          $
          {(
            product.product_price *
            (product.product_sizeIndex || 1) *
            product.product_amount
          ).toFixed(2)}
        </div>
      </div>
    );
  }
};
export default CartProduct;

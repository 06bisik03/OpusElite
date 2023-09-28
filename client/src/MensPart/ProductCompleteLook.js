import styles from './Product.module.css';
import { useState,useEffect } from "react";


const ProductCompleteLook = ({item}) => {

    const [imageShown, setImageShown] = useState(null);
  useEffect(() => {
const thumbnail = item.product_firstImage
    ? item.product_firstImage
    : item.product_images[0];
    setImageShown(thumbnail);
  },[item]) 
    
  if(item) {
    return (
        <div className={styles.productContainer}>
          <a href={`/product/${item.product_id}`}  className={`${styles.imgContainer} ${styles.smoothTransition}`}>
            <div
              className={styles.imgContainer}
         >
              <img alt="_"src={imageShown} />
            </div>
          </a>
          <div className={styles.details}>
            <a href={`/product/${item.product_id}`} className={styles.name}>
              {item.product_name}
            </a>
            <div className={styles.price}>
              ${item.product_price.toFixed(2)}
             
            </div>
          </div>
        </div>
      );
  }
}
export default ProductCompleteLook
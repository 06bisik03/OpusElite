import { useState } from "react";
import styles from "./Product.module.css";
import { Link } from "react-router-dom";
import UsePostData from "../Hooks/UsePostData";
import UseCheckLog from "../Hooks/UseCheckLog";
import { UseRemoveFavourite } from "../Hooks/UseFavourites";
import Loader from "../UI/Loader";
const Product = ({ item, favItem }) => {
  const thumbnail = item.product_firstImage
    ? item.product_firstImage
    : item.product_images[0];
  const [imageShown, setImageShown] = useState(thumbnail);
  const [favourite, setFavourite] = useState(favItem);
  const favouriteItemHandler = async () => {
    if (favourite === false) {
      try {
        setFavourite(true);
        const currentUser = await UseCheckLog();
        const currentUserID = currentUser.data.user_id;
        await UsePostData(item, currentUserID, "newfavourite");
      } catch (error) {
        console.error(error);
        window.location.href = "/profile";
      }
    } else {
      try {
        setFavourite(false);
        await UseCheckLog();
        await UseRemoveFavourite(item.product_id);
      } catch (error) {
        console.error(error);
      }
    }
  };
  const secondaryImage = item.product_secondImage || thumbnail;

  if (item) {
    return (
      <div className={styles.productContainer}>
        <Link
          to={`/product/${item.product_id}`}
          className={`${styles.imgContainer} ${styles.smoothTransition}`}>
          <div
            className={styles.imgContainer}
            onMouseEnter={() => setImageShown(secondaryImage)}
            onMouseLeave={() => setImageShown(thumbnail)}>
            <img alt="_"src={imageShown} />
          </div>
        </Link>
        <div className={styles.details}>
          <Link to={`/product/${item.product_id}`} className={styles.name}>
            {item.product_name}
          </Link>
          <div className={styles.price}>
            ${item.product_price.toFixed(2)}
            <i
              className={`fa-${favourite ? "solid" : "regular"} fa-heart`}
              style={{ color: favourite ? "#ff0000" : null }}
              onClick={favouriteItemHandler}></i>
          </div>
        </div>
      </div>
    );
  } else {
    return <Loader />;
  }
};
export default Product;

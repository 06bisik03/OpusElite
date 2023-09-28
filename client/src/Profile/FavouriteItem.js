import { UseRemoveFavourite } from "../Hooks/UseFavourites";
import styles from "./FavouriteItem.module.css";
const FavouriteItem = ({ item, setNewData,setNewLength}) => {

    const removeFromFavs = async()=> {
        const [favData, favDataLength] = await UseRemoveFavourite(item.product_id);
        setNewData(favData);
        setNewLength(favDataLength);
    }
  return (
    <div className={styles.favouriteItemContainer}>
      <button type="button" onClick={removeFromFavs} className={styles.btnClose}>
            X
          </button>
      <div>
        <img alt="_" src={item.product_firstImage} />
      </div>
      <div>{item.product_name}</div>
      <div>${item.product_price.toFixed(2)}</div>
    </div>
  );
};
export default FavouriteItem;

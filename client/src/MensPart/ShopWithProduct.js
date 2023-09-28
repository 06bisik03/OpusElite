import { useEffect, useState } from "react";
import UseExtractProductDataForArray from "../Hooks/UseExtractProductData";
import UseFindTitle from "../Hooks/UseFindTitle";

import styles from "./ShopWithProduct.module.css";
import UseFavourites from "../Hooks/UseFavourites";
import Loader from "../UI/Loader";
import ProductToFav from "./ProductToFav";
const ShopWithProduct = ({ products, productType, sex }) => {
  const [extractedProductData, setExtractedProductData] = useState(null);
  const [favs, setFavs] = useState(null);
  useEffect(() => {
    const fetchMarketData = async () => {
      setExtractedProductData(
        UseExtractProductDataForArray(products, productType)
      );
      try {
        const [favourites, favouritesNumber] = await UseFavourites();
        if(favourites !== null && favouritesNumber !==null) {
          setFavs([...favourites])
        } else {
          setFavs([]);
        }
      } catch (error) {
        setFavs(null);
      }
    };
    fetchMarketData();
  }, [products, productType]);
  const title = UseFindTitle(productType, sex);
  if (!extractedProductData && !favs) {
    return <Loader />;
  }

  return (
    <div className={styles.shopWithProductContainer}>
      <div
        className={
          sex === "men" ? styles.titleCoverMen : styles.titleCoverWomen
        }>
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.shop}>
        <div className={styles.products}>
          <ProductToFav
            extractedProductData={extractedProductData}
            favs={favs}
          />
        </div>
      </div>
    </div>
  );
};
export default ShopWithProduct;

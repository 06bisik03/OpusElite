import React, { useEffect, useState } from "react";
import styles from "./CompleteLook.module.css";

import UseCompleteLook from "../Hooks/UseCompleteLook";
import  {
  UseExtractProductDataForObject,
} from "../Hooks/UseExtractProductData";
import ProductCompleteLook from "./ProductCompleteLook";
import Loader from "../UI/Loader";
const CompleteLook = ({ currentProduct }) => {
  const [matchingProducts, setMatchingProducts] = useState(null);
  useEffect(() => {
  
    const fetchMatchingProducts = async () => {

      const [
        matchingProduct1,
        matchingProduct1Type,
        matchingProduct2,
        matchingProduct2Type,
      ] = await UseCompleteLook(currentProduct);

      const matchingProductData ={
        suggestionItem1:   matchingProduct1,
        suggestionItem1Type: matchingProduct1Type,
        suggestionItem2: matchingProduct2,
        suggestionItem2Type:   matchingProduct2Type,
      }

      if (matchingProductData) {

        const extractMatchingProduct1Data = UseExtractProductDataForObject(
          matchingProductData.suggestionItem1,
          matchingProductData.suggestionItem1Type
        );
        const extractMatchingProduct2Data = UseExtractProductDataForObject(
          matchingProductData.suggestionItem2,
          matchingProductData.suggestionItem2Type,
        );

        setMatchingProducts({
          extractMatchingProduct1Data,
          extractMatchingProduct2Data,
        });
      }
    };

    fetchMatchingProducts();
  }, [currentProduct]);
  if (matchingProducts) {
    return (
      <div className={styles.completeLook}>
        <div className={styles.title}>COMPLETE THE LOOK</div>
        <div className={styles.matchingItems}>
          <div className={styles.product1}>
            <ProductCompleteLook item={matchingProducts.extractMatchingProduct1Data[0]} />
          </div>
          <div className={styles.product2}>
            <ProductCompleteLook item={matchingProducts.extractMatchingProduct2Data[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    return <Loader/>
  }
}
export default CompleteLook;

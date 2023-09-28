import styles from './ProductDetailed.module.css';
import { useEffect, useState } from 'react';
const DetailsProduct = ({product}) => {
  const [scent,setScent] = useState(product.typeFormatted === "Scent");
  useEffect(() => {
    setScent(product.typeFormatted === "Scent")
  },[product])
   
    if(!scent) {
       return (
        <div className={styles.detailsFooter}>
        <div className={styles.footerTitle}>DETAILS</div>
        <div className={styles.footerDetails}>
          <div>{`Product Type: ${product.formattedSex}'s ${product.typeFormatted}`}</div>
          <div>{`Product Color: ${product.product_color}`}</div>
          <div>{`Product Material: ${product.product_material}`}</div>
          
          <div>
            {`Made in ${product.product_origin}`}
          </div>
          <div>{`Product Code: ${product.product_id.toUpperCase()}`}</div>
        </div>
      </div>
    ) 
    } else {
        return (
            <div className={styles.detailsFooter}>
            <div className={styles.footerTitle}>DETAILS</div>
            <div className={styles.footerDetails}>
              <div>{`Product Type: ${product.formattedSex}'s ${product.typeFormatted}`}</div>
              <div>{`Product Story: ${product.product_story}`}</div>
              <div>
                {`Product Origin: Made in Paris`}
              </div>
              <div>{`Product Code: ${product.product_id.toUpperCase()}`}</div>
            </div>
          </div>
        ) 
    }
    
}
export default DetailsProduct;
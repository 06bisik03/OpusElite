import { useState } from "react";
import UseCheckLog from "../Hooks/UseCheckLog";
import UsePostData from "../Hooks/UsePostData";
import styles from "./SuitsList.module.css";
const SuitsList = ({ suitFound }) => {
  const [bought, setBought] = useState(false);
  const addToCartHandler = async () => {
    const newSuit = {
      product_type: "Suit",
      product_name: `OpusElite ${suitFound.custom_product_material} Suit`,
      product_price: suitFound.custom_product_price,
      product_colour: suitFound.custom_product_colour,
      product_size: suitFound.custom_product_size,
      product_amount: 1,
      product_id: suitFound.custom_product_id,
      product_material: suitFound.custom_product_material,
      product_images: [
        suitFound.custom_product_image1,
        suitFound.custom_product_image2,
        suitFound.custom_product_image3,
        suitFound.custom_product_image4,
      ],
    };
    try {
         const user = await UseCheckLog();
    const userid = user.data.user_id;  
    const ress = await UsePostData(newSuit, userid, "newproduct");

    if (ress.status === 200) {
      setBought(true);
    }
    } catch(error) {
        window.location.href ="/profile"
    }
  

   
  };
  if (
    suitFound.custom_product_material &&
    suitFound.custom_product_colour &&
    suitFound.custom_product_price
  ) {
    return (
      <div className={styles.suitsListContainer}>
        <div className={styles.found}>
          <div>
            <div className={styles.textFound}>
              Your custom suit has been generated.
              <br />
              Specifics of your custom suit:
            </div>
          </div>
          <div>
            <div className={styles.specifics}>
              <div>
                <div>Suit Material: </div>
                <div>{suitFound.custom_product_material}</div>
              </div>
              <div>
                <div>Suit Size: </div>
                <div>{suitFound.custom_product_size}</div>
              </div>
              <div>
                <div>Suit Colour:</div>
                <div>{suitFound.custom_product_colour}</div>
              </div>
              <div>
                <div>Suit Origin: </div>
                <div>Naples, Italy</div>
              </div>
              <div>
                <div>Knitting Type: </div>
                <div>Handmade Suit</div>
              </div>
              <div>
                <div>Suit Price: </div>
                <div>${suitFound.custom_product_price.toFixed(2)}</div>
              </div>
            </div>
            <div className={styles.checkout}>
              <button disabled={bought} onClick={addToCartHandler}>
                {bought ? "Added To Cart!" : "Add To Cart"}
              </button>
            </div>
          </div>
        </div>
        <div className={styles.suits}>
          <Suit item={suitFound} />
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.noSuits}>
        <div>
          No suits found according to your custom filters.
          <a href="/custom/suits">Back to filters</a>
        </div>
      </div>
    );
  }
};
export default SuitsList;

const Suit = ({ item }) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.imgCont}>
        <img src={item.custom_product_image1} alt="_"/>
      </div>
      <div className={styles.priceCont}>
        <div>OpusElite {item.custom_product_material} Suit</div>
        <div>${item.custom_product_price.toFixed(2)}</div>
      </div>
    </div>
  );
};

import { useState } from "react";
import UseCheckLog from "../Hooks/UseCheckLog";
import UsePostData from "../Hooks/UsePostData";
import styles from "./ShoesList.module.css";

const ShoesList = ({ shoeFound }) => {
  const [bought, setBought] = useState(false);
  const addToCartHandler = async () => {
    const newSuit = {
      product_type: "Shoes",
      product_name: `OpusElite ${shoeFound.custom_product_material} Shoe`,
      product_price: shoeFound.custom_product_price,
      product_colour: shoeFound.custom_product_colour,
      product_size: shoeFound.custom_product_size,
      product_amount: 1,
      product_material: shoeFound.custom_product_material,
      product_images: [
        shoeFound.custom_product_image1,
        shoeFound.custom_product_image2,
        shoeFound.custom_product_image3,
        shoeFound.custom_product_image4,
      ],
    };
    const user = await UseCheckLog();
    const userid = user.data.user_id;

    const ress = await UsePostData(newSuit, userid, "newproduct");

    if (ress.status === 200) {
      setBought(true);
    }
  };
  if (
    shoeFound.custom_product_colour &&
    shoeFound.custom_product_size &&
    shoeFound.custom_product_price
  ) {
    return (
      <div className={styles.suitsListContainer}>
        <div className={styles.found}>
          <div>
            <div className={styles.textFound}>
              Your custom shoe has been generated.
              <br />
              Specifics of your custom shoe:
            </div>
          </div>
          <div>
            <div className={styles.specifics}>
              <div>
                <div>Shoe Material: </div>
                <div>{shoeFound.custom_product_material}</div>
              </div>
              <div>
                <div>Shoe Size: </div>
                <div>{shoeFound.custom_product_size}</div>
              </div>
              <div>
                <div>Shoe Colour:</div>
                <div>{shoeFound.custom_product_colour}</div>
              </div>
              <div>
                <div>Shoe Origin: </div>
                <div>Naples, Italy</div>
              </div>
              <div>
                <div>Production Type: </div>
                <div>Handmade</div>
              </div>
              <div>
                <div>Shoe Price: </div>
                <div>${shoeFound.custom_product_price}.00</div>
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
          <Shoe item={shoeFound} />
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.noShoes}>
        <div>
          No shoes found according to your custom filters.
          <a href="/custom/shoes">Back to filters</a>
        </div>
      </div>
    );
  }
};
export default ShoesList;

const Shoe = ({ item }) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.imgCont}>
        <img src={item.custom_product_image1} alt="_"/>
      </div>
      <div className={styles.priceCont}>
        <div>OpusElite {item.custom_product_material} Suit</div>
        <div>${item.custom_product_price}.00</div>
      </div>
    </div>
  );
};

import styles from "./ProductSize.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const sizesClothes = [48, 50, 52, 54, 56, 58];
const sizesShoesMen = [40, 41, 42, 43, 44, 45];
const sizesShoesWomen = [34, 35, 36, 37, 38, 39];
const sizesScents = ["50ml", "100ml", "150ml", "200ml", "250ml", "300ml"];

const ProductSize = ({
  itemAdded,
  findSize,
  addToCart,
  productType,
  productSex,

}) => {
  const [size, setSize] = useState(0);
  const [bought, setBought] = useState(false);
  const [sizesArray, setSizesArray] = useState(null);

 
  const findSizeHandler = () => {
    findSize(true);
  };
  useEffect(() => {
    switch (productType) {
      case "Scent":
        setSizesArray([...sizesScents]);
        setSize(sizesScents[0]);
        break;
      case "Shoe":
        if (productSex === "Men") {
          setSizesArray([...sizesShoesMen]);
          setSize(sizesShoesMen[0]);
        } else {
          setSizesArray([...sizesShoesWomen]);
          setSize(sizesShoesWomen[0]);
        }
        break;
      default:
        setSizesArray([...sizesClothes]);
        setSize(sizesClothes[0]);
        break;
    }
  }, [productSex,productType]);

  useEffect(() => {
    setBought(itemAdded);
  }, [itemAdded]);

  const addToCartHandler = async () => {
    let sizeIndex = 0;
    switch (size) {
      case "50ml":
        sizeIndex = 1;
        break;
      case "100ml":
        sizeIndex = 2;
        console.log(sizeIndex);
        break;
      case "150ml":
        sizeIndex = 3;

        break;
      case "200ml":
        sizeIndex = 4;
        break;
      case "250ml":
        sizeIndex = 5;
        break;
      case "300ml":
        console.log("x");
        sizeIndex = 6;
        break;
      default:
        sizeIndex = 1;
        break;
    }

    addToCart(size, sizeIndex);
  };
  if (sizesArray) {
    return (
      <div className={styles.productSizeContainer}>
        <div className={styles.sizeChoice}>
          <div className={styles.title}>
            <div>CHOOSE SIZE(IT)</div>
            <div className={styles.findSize} onClick={findSizeHandler}>
              <i class="fa-solid fa-ruler-vertical"></i>
              <div>Find your size</div>
            </div>
          </div>

          <div className={styles.sizes}>
            {sizesArray.map((item, index) => {
              return (
                <button
                  onClick={() => setSize(item)}
                  className={size === item && styles.buttonActive}>
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        <div className={styles.pros}>
          <div>
            <i class="fa-solid fa-shop"></i>
            <Link>In-store complimentary tailoring for all online orders.</Link>
          </div>
          <div>
            <i class="fa-solid fa-truck-fast"></i>
            <Link> Free returns on all orders.</Link>
          </div>
        </div>
        <div className={styles.buttons}>
          <button onClick={addToCartHandler}>
            {bought ? (
              <>
                <i
                  class="fa-solid fa-circle-check"
                  style={{ color: "#ff7429" }}
                />
                ADDED TO CART
              </>
            ) : (
              <>
                <i
                  class="fa-solid fa-bag-shopping"
                  style={{ color: "#ffffff" }}
                />
                ADD TO SHOPPING CART
              </>
            )}
          </button>
          <button>
            <i class="fa-solid fa-location-dot"></i>FIND IN STORE
          </button>
        </div>
      </div>
    );
  }
};
export default ProductSize;

import { useEffect, useState } from "react";
import UseProductDetails from "../Hooks/UseProductDetails";
import Navbar from "../UI/Navbar";
import styles from "./ProductDetailed.module.css";
import { useParams } from "react-router-dom";
import ProductSize from "./ProductSize";
import { UseExtractProductDataForObject } from "../Hooks/UseExtractProductData";

import CompleteLook from "./CompleteLook";
import Advantages from "./Advantages";
import UsePostData from "../Hooks/UsePostData";
import UseCheckLog from "../Hooks/UseCheckLog";
import DetailsProduct from "./DetailsProduct";
import Loader from "../UI/Loader";
import Size from "./Size";
import {
  UseItemAlreadyFavourite,
  UseToggleFavourite,

} from "../Hooks/UseFavourites";

const ProductDetailed = () => {
  const { productID } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [productDetails, setProductDetails] = useState(null);
  const [sizeIndex, setSizeIndex] = useState(0);
  const [itemFav, setItemFav] = useState(false);
  const [addedItem, setAddedItem] = useState(0);
  const [findSize, setFindSize] = useState(false);
  const [itemAddedToCart, setItemAddedToCart] = useState(false);

  const setPriceIfScent = (sizeIndex) => {
    const multiplier = sizeIndex + 1;
    setSizeIndex(multiplier);
  };
  const itemToggleFavHandler = async () => {
    try {
      await UseToggleFavourite(productDetails);
      setItemFav(!itemFav);
    } catch (error) {
      alert(
        "There was an error while making the item favourite/ unmaking the item favourite."
      );
    }
  };
  useEffect(() => {
    (async function () {
      const favOrNot = await UseItemAlreadyFavourite(productID);
      setItemFav(favOrNot);
      try {
        const productData = await UseProductDetails(productID);
        const extractProductData = UseExtractProductDataForObject(
          productData.document,
          productData.collectionName
        );
        setProductDetails(...extractProductData);
      } catch (error) {
        window.location.href = "/*";
      }
    })();
  }, [productID]);

  const addToCartHandler = async (size, sizeIndex) => {
    try {
      const user = await UseCheckLog();
      if (user === 401) {
        window.location.href = "/profile";
      } else {
        setAddedItem(1);
        const boughtItem = {
          ...productDetails,
          product_size: size,
          product_sizeIndex: sizeIndex,
          product_amount: 1,
        };
        const ress = await UsePostData(
          boughtItem,
          user.data.user_id,
          "newproduct"
        );
        if (ress.status === 200) {
          setItemAddedToCart(true);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (productDetails) {
    const imageArray = productDetails.product_images.filter((element) => element !== undefined);
    console.log(imageArray)
    return (
      <div className={styles.productDetailedContainer}>
        {findSize && <Size closeModal={setFindSize} />}
        <Navbar plus={addedItem} />
        <div className={styles.productDetails}>
          <div className={styles.photos}>
            <div className={styles.carousel}>
              <div className={styles.photosCarousel}>
                {imageArray.map((photoLink, index) => {
                  return (
                    <img
                    alt="_"
                      src={photoLink}
                      style={{
                        border:
                          index === selectedImage
                            ? "2px solid black"
                            : "2px solid transparent",
                        boxSizing: "border-box",
                      }}
                      onClick={() => setSelectedImage(index, imageArray)}
                    />
                  );
                })}
              </div>
            </div>
            <div className={styles.mainPhoto}>
              <img alt="_"src={imageArray[selectedImage]} />
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.detailsHeaders}>
              <div className={styles.controls}>
                <div>OpusElite</div>
                <div className={styles.shareFav}>
                  <i className="fa-solid fa-share-nodes" />
                  <i
                    className={`fa-${itemFav ? "solid" : "regular"} fa-heart`}
                    style={{ color: itemFav ? "#ff0000" : null }}
                    onClick={itemToggleFavHandler}></i>
                </div>
              </div>
              <div className={styles.productName}>
                {productDetails.product_name}
              </div>
              <div className={styles.productPrice}>
                $
                {(
                  productDetails.product_price * (sizeIndex > 0 ? sizeIndex : 1)
                ).toFixed(2)}
              </div>
              <div className={styles.installmentChoice}>
                <i className="fa-brands fa-paypal" />
                <div>
                  Pay now in 3-24 month installments with OpusElite Plus. <br />{" "}
                </div>
              </div>
            </div>
            <div className={styles.store}>
              <ProductSize
                itemAdded={itemAddedToCart}
                findSize={setFindSize}
                addToCart={addToCartHandler}
                setPrice={setPriceIfScent}
                productSex={productDetails.formattedSex}
                productType={productDetails.typeFormatted}
              />
            </div>
            <DetailsProduct product={productDetails} />
          </div>
        </div>
        <div>
          <CompleteLook currentProduct={productDetails} />
        </div>
        <div>
          <Advantages />
        </div>
      </div>
    );
  } else {
    return <Loader />;
  }
};
export default ProductDetailed;

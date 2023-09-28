import Navbar from "../UI/Navbar";
import { useParams } from "react-router-dom";
import styles from "./Shop.module.css";
import { useEffect, useState } from "react";
import UseShopProducts from "../Hooks/UseShopProducts";
import ShopWithProduct from "./ShopWithProduct";

const Shop = () => {
  const [shopData, setShopData] = useState("");
  const [loading, setLoading] = useState(false)
  const { sex,shopType } = useParams("shop");

 
  useEffect(() => {
    setLoading(true)
    async function fetchData() {

      try {
        const data = await UseShopProducts(shopType, sex);
        setShopData(data);
        setLoading(false); 
      } catch (error) {
        // Handle any errors that might occur during data fetching
        console.error("Error fetching data:", error);
        setLoading(false); // Ensure loading is set to false in case of an error
      }
    }
    fetchData();
  }, [shopType, sex]);
if(shopData && !loading) {
  return (
    <div className={styles.shopContainer}>
      <Navbar />
      <ShopWithProduct products={shopData} sex={sex} productType={shopType}/>
    </div>
  );
}
  
};
export default Shop;

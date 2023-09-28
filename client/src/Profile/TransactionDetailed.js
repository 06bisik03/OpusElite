import styles from "./TransactionDetailed.module.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import axios from "axios";
import PastTransaction from "./PastTransaction";
const TransactionDetailed = () => {
  const trsid = useParams("trs").trsid;
  const [trsData, setTrsData] = useState(null);

  useEffect(() => {
    const fetchTransactionData = async () => {
      try {
        const trsData = await axios.get(
          `https://localhost:8000/transaction/trsgetbyid/${trsid}`
        );
        setTrsData(trsData.data);
        console.log(trsData.data.trs_items_bought);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTransactionData();
  }, [trsid]);
  if (trsData) {
    console.log(trsData);
    return (
      <div className={styles.transactionDetailedContainer}>
        <div className={styles.transactionDetailed}>
          <div>Transaction Details</div>
          <div className={styles.products}>
            <div className={styles.table}>
              <div className={styles.titleContainer}>
                <div className={styles.headers}>
                  <div>Product</div>
                  <div>Size/Vol.</div>
                  <div>Amount</div>
                </div>
              </div>

              <div className={styles.productList}>
                <div className={styles.productsC}>
                  {trsData.trs_items_bought.map((item) => {
                    return <PastTransaction item={item} />;
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.controls}>
            <div>Transaction Total: ${trsData.trs_total.toFixed(2)}</div>
            <Link to="/profile">Back</Link>
          </div>
        </div>
      </div>
    );
  }
};
export default TransactionDetailed;

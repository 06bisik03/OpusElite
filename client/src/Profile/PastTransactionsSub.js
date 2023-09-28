
import UseUserTransactions from "../Hooks/UseUserTransactions";
import styles from "./PastTransactionsSub.module.css";
import { useEffect,useState } from "react";

const PastTransactionsSub = () => {
    const [pastTransactions, setPastTransactions] = useState([]);
   useEffect(() => {
    const fetchTransactions = async() => {
      const pastTransactionsArray = await UseUserTransactions();
      console.log(pastTransactionsArray);
      setPastTransactions(pastTransactionsArray);
    }
    fetchTransactions();
   },[]);
   
if(pastTransactions.length > 0) {
   return (
    <div className={styles.ptSubContainer}>
      <div className={styles.ptSub}>
        <div>Past Transactions</div>
        <div className={styles.pTransactions}>
          <div className={styles.transactions}>
            {pastTransactions.map(item => {
              return <Transaction trs={item} />
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
 
   }

export default PastTransactionsSub;

const Transaction = ({trs}) => {
  const date= new Date(trs.trs_date);
  const dateFormatted = date.toLocaleDateString('en-GB')
  return (
    <a className={styles.transactionContainer} href={`/trs/${trs.trs_id}`}>
      <div>{dateFormatted}</div>
      <div> MasterCard {trs.trs_card_number}</div>
      <div>TRS ID: {trs.trs_id}</div>
      <div>${trs.trs_total.toFixed(2)}</div>
    </a>
  );
};

import styles from './PastTransaction.module.css';
const PastTransaction = ({item}) => {
    return (
        <div className={styles.pastTransactionContainer}>
            <div className={styles.product}>
                <div className={styles.imgContainer}>
                    <img src={item[3]} alt="_"/>
                </div>
                <div>
                    {item[2]}
                </div>
            </div>
            <div>
                {item[1]}
            </div>
            <div>
                {item[4]}
            </div>

        </div>
    )
}
export default PastTransaction;
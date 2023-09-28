import styles from './Choices.module.css';
import { Link } from 'react-router-dom';
const Choices= () => {
    return (
        <div className={styles.choicesContainer}>
           <div className={styles.container}>
        <div>
          <Link to="/custom/suits"className={styles.content}>
            <h3>Custom Suits</h3>
          </Link>
        </div>
        <div>
          <Link to="/custom/shoes"className={styles.content}>
            <h3>Custom Shoes</h3>
          </Link>
        </div>
        
      </div>
        </div>
    )
}
export default Choices;
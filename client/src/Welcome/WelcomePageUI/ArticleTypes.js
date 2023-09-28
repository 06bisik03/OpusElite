import styles from "./ArticleTypes.module.css";
import { Link } from "react-router-dom";

const ArticleTypes = () => {
  return (
    <div className={styles.articleTypesContainer}>
      <div className={styles.discover}>
        <div>DISCOVER OUR PRODUCTS</div>
      </div>
      <div className={styles.container}>
        <div>
          <Link to="/shop/men/suits"className={styles.content}>
            <h3>Men's Suits</h3>
          </Link>
        </div>
        <div>
          <Link to="/shop/women/suits"className={styles.content}>
            <h3>Women's Suits</h3>
          </Link>
        </div>
        <div>
          <Link to="/shop/men/shoes"className={styles.content}>
            <h3>Men's Shoes</h3>
          </Link>
        </div>
        <div>
          <Link to="/shop/women/suits"className={styles.content}>
            <h3>Women's Shoes</h3>
          </Link>
        </div>
        <div>
          <Link to="/shop/men/scents"className={styles.content}>
            <h3>Men's Scents</h3>
          </Link>
        </div>
        <div>
          <Link to="/shop/women/scents"className={styles.content}>
            <h3>Women's Scents</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ArticleTypes;

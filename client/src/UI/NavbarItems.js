import styles from './Navbar.module.css';
const NavbarItems = ({items}) => {
    return (
        <div className={`${styles.column} ${styles.secondColumn}`}>
        <div className={`${styles.ad} ${styles.linker}`} href={`/product/${items[0]._id}`}>
          <div className={styles.imgNav}>
            <img
              src={
                items[0].suit_image1
              }
              alt="_"
            />
          </div>
          <div className={styles.ownBrand}>
            <a href={`/product/${items[0]._id}`}>Our Top Trending Suit</a>
            
          </div>
        </div>
        <div className={styles.ad} href={`/product/${items[1]._id}`}>
          <div className={styles.imgNav}>
            <img
            
            alt="_"
              src={
                items[1].shoe_image1
              }
            />
          </div>
          <div className={styles.ownBrand}>
              <a href={`/product/${items[1]._id}`}>Our Top Trending Shoe</a>
            <br />
           
          </div>
        </div>
      </div>
    )
}               
export default NavbarItems;
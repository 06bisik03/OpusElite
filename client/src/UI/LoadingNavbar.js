import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
const LoadingNavbar = () => {
  
        return (
            <div className={styles.navbarContainer}>
              <Link className={styles.title} to="/">
                OPUSELITE
              </Link>
              <div className={styles.linksContainer}>
                <div className={styles.dropdown}>
                  <button className={styles.dropbtn}>Men's</button>
                  <div className={styles.dropdownContent}>
                    <div className={styles.row}>
                      <div className={styles.column}>
                        <div className={styles.leftColumn}>
                          <div className={styles.dropdownLinks}>
                            <div className={styles.linkHolder}>
                              <div>Suit Types</div>
                              <Link to="/shop/men/suits">Suits</Link>
                              <Link to="/shop/men/scents">Scents</Link>
                              <Link to="/shop/men/shirts">Shirts</Link>
                              <Link to="/shop/men/trousers">Trousers</Link>
                              <Link to="/shop/men/shoes">Shoes</Link>
                            </div>
                          </div>
                        </div>
                        <div className={styles.rightColumn}>
                          <div className={styles.imgNav}>
                            Loading...
                          </div>
                          <div>
                            ALL TIME BESTSELLER: 
                            <br />
                                Loading...
                          </div>
                        </div>
                      </div>
                      Loading...
                    </div>
                  </div>
                </div>
                <div className={styles.dropdown}>
                  <button className={styles.dropbtn}>Women's</button>
                  <div className={styles.dropdownContent}>
                    <div className={styles.row}>
                      <div className={styles.column}>
                        <div className={styles.leftColumn}>
                          <div className={styles.dropdownLinks}>
                            <div className={styles.linkHolder}>
                              <div>Suit types</div>
                              <Link to="/shop/women/suits">Suits</Link>
        
                              <Link to="/shop/women/scents">Scents</Link>
                              <Link to="/shop/women/blouses">Blouses</Link>
                              <Link to="/shop/women/skirts">Skirts</Link>
                              <Link to="/shop/women/shoes">Heels</Link>
                            </div>
                          </div>
                        </div>
                        <div className={styles.rightColumn}>
                          <div className={styles.imgNav}>
                            Loading...
                          </div>
                          <div>
                            Our All-Time Bestseller:
                            <br />
                            Loading...
                          </div>
                        </div>
                      </div>
                      <div>
                        Loading...
                        </div>
                    </div>
                  </div>
                </div>







                <div className={styles.linkContainer}>
                  <Link className={styles.links} to="/opuselite">Our Brand</Link>
                </div>
                <div className={styles.linkContainer}>
                  <Link className={styles.links} to="/custom">
                    Custom Orders
                  </Link>
                </div>
                <div className={styles.linkContainer}>
                  <Link className={styles.links} to="/profile">
                    Profile
                  </Link>
                </div>
                <div className={styles.linkContainer}>
                  <Link className={styles.links} to="/cart">
                    <button
                      data-quantity='0'
                      className={styles.btnCart}>
                      <svg
                        className={styles.iconCart}
                        viewBox="0 0 24.38 30.52"
                        height="30.52"
                        width="24.38"
                        xmlns="http://www.w3.org/2000/svg">
                        <title>icon-cart</title>
                        <path
                          transform="translate(-3.62 -0.85)"
                          d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"></path>
                      </svg>
                      <span className={styles.quantity}></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
    

}
export default LoadingNavbar;
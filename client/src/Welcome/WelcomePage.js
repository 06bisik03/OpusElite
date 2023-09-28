import Navbar from '../UI/Navbar';
import styles from './WelcomePage.module.css'
import Slogan from './WelcomePageUI/Slogan';
import Introduction from './WelcomePageUI/Introduction';
import { useState, useEffect } from 'react';
import ArticleTypes from './WelcomePageUI/ArticleTypes';
import Praise from './WelcomePageUI/Praise';
import Recommendations from './WelcomePageUI/Recommendations';
import Footer from './WelcomePageUI/Footer';
const WelcomePage = () => {
    const [isSlidingIn, setIsSlidingIn] = useState(false);

    useEffect(() => {
        setIsSlidingIn(true);
    }, []);
    return (
        <div className={styles.containerWelcomePage}>
            
            <div className={`${styles.detailsContainer} ${isSlidingIn ? styles.slideIn  : ''} ${isSlidingIn ? styles.visible : ''}`}>
                <div>
                   <Navbar/> 
                </div>
                
                <Slogan slideCompleted={isSlidingIn}/>
            </div>
            <div>
                <Introduction />
            </div>
            <div>
                <ArticleTypes/>
            </div>
            <div>
                <Praise />
            </div>
            <div>
                <Recommendations/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
export default WelcomePage;
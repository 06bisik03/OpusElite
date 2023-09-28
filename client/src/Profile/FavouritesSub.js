import { useState, useEffect } from "react";

import styles from "./FavouritesSub.module.css";

import UseFavourites from "../Hooks/UseFavourites";

import FavouriteItem from "./FavouriteItem";
import Loader from "../UI/Loader";
const FavouritesSub = () => {
  const [favs, setFavs] = useState(null);
  const [favsLength, setFavsLength] = useState(null);
  useEffect(() => {
    const getFavs = async () => {
      const [favs, favsLength] = await UseFavourites();
      setFavs([...favs]);
      setFavsLength(favsLength);
    };
    getFavs();
  }, []);
  if (favs && Array.isArray(favs) && favsLength >= 0) {
    console.log(favs);
    return (
      <div className={styles.favouritesSubContainer}>
        <div className={styles.favouritesSub}>
          <div>FAVOURITES ({favsLength})</div>
          <div className={styles.favouritesContainer}>
            <div className={styles.favourites}>
              {favs.map(item => {
              return   <FavouriteItem item={item} setNewData={setFavs} setNewLength={setFavsLength}/>
            })}
            
            </div>
            
          
          </div>
        </div>
      </div>
    );
  } else {
    return <Loader/>
  }
};
export default FavouritesSub;

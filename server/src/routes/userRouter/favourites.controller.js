const {getLatestFavs,removeFromFavs } = require('../../models/cart/favourites.model');
async function fetchLatestFavs(userID) {
    const ress= await getLatestFavs(userID);
    if (ress) {
        return ress;
      } else {
        return null;
      }

}
async function removeFromFavourites(userID, productID) {
    const ress= await removeFromFavs(userID, productID);
    if (ress) {
        return ress;
      } else {
        return null;
      }

}
 module.exports = {
    fetchLatestFavs,
    removeFromFavourites
 }
const {getLatestCart} = require('../../models/cart/cart.model');
async function fetchLatestCart(userID) {
    const ress = await getLatestCart(userID);
    if (ress) {
        return ress;
      } else {
        return null;
      }

}
module.exports = {
    fetchLatestCart
}
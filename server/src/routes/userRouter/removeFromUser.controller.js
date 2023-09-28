const {decrementItemFromUserCart} = require('../../models/user/user.model');
async function decrementItemFromUser(userID, productID) {
    const ress = await decrementItemFromUserCart(userID, productID);
    if (ress) {
        return ress;
      } else {
        return null;
      }
}
module.exports = {
    decrementItemFromUser,
}
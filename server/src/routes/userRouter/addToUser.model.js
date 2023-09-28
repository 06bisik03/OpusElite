const mongoose = require("mongoose");
const userCollection = mongoose.connection
  .useDb("OpuseliteUsers")
  .collection("users");
async function addProductToCart(product, userID) {
  try {
    const result = await userCollection.updateOne(
      {
        user_id: userID,
        user_cart: {
          $elemMatch: {
            product_name: product.product_name,
            product_size: product.product_size,
          },
        },
      },
      {
        $inc: { "user_cart.$.product_amount": 1 },
      }
    );
    if (result.modifiedCount === 1) {
      return result;
    } else {
      const addResult = await userCollection.updateOne(
        { user_id: userID },
        { $push: { user_cart: product } }
      );

      if (addResult.modifiedCount === 1) {
        return addResult;
      } else {
        return null;
      }
    }
  } catch (err) {
    console.error(err);
    return null;
    
  }
}
async function addProductToFavourites(product, userID) {
  try {
    const result = await userCollection.updateOne(
      { user_id: userID },
      { $push: { user_favourites: product } }
    );
    if (result.modifiedCount === 1) {
      console.log(`Added item to the user's favourites.`);
      return result;
    } else {
      console.log(`User not found or item not added to the favourites.`);
      return null;
    }
  } catch (err) {
    console.error(err);
    return null;
  }
}

module.exports = {
  addProductToCart,
  addProductToFavourites,
};

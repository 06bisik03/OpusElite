const mongoose = require('mongoose');
const userCollection=mongoose.connection.useDb('OpuseliteUsers').collection('users')
async function getLatestFavs(userID) {
    try {
        const result = await userCollection.findOne({
            user_id: userID
        }) 
        console.log(result)
        if(result) {
            return result.user_favourites
        } else {
            return null;
        }
    } catch(error) {
        console.error('Error while fetching latest cart');
        throw new Error('Error at getLatestFavs model level');
    }
}
async function removeFromFavs(userID, productID) {
    try {
        const result = await userCollection.findOne({
            user_id: userID
        });

        if (result) {
            const userFavs = result.user_favourites;


            const indexToRemove = userFavs.findIndex(item => item.product_id === productID);

            if (indexToRemove !== -1) {

                userFavs.splice(indexToRemove, 1);


                await userCollection.updateOne(
                    { user_id: userID },
                    { $set: { user_favourites: userFavs } }
                );

                return userFavs; 
            } else {

                return null;
            }
        } else {

            return null;
        }
    } catch (error) {
        console.error('Error while removing item from favorites', error);
        throw new Error('Error at removeFromFavs model level');
    }
}
module.exports = {
    getLatestFavs,
    removeFromFavs
}
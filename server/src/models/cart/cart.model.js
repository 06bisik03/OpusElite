const mongoose = require('mongoose');
const userCollection=mongoose.connection.useDb('OpuseliteUsers').collection('users')
async function getLatestCart(userID) {
    try{
        const result = await userCollection.findOne({
            user_id: userID,
        })
        if(result) {
            return result.user_cart;
        } else {
            return null;
        }
    } catch(error) {
        console.error('Error while fetching latest cart')
        throw new Error('Error');
    }
}
module.exports = {
    getLatestCart,
}
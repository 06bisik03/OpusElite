
const mongoUser = require('./user.mongo');
const mongoose = require('mongoose');
const userCollection = mongoose.connection.useDb('OpuseliteUsers')




function createUser(user) {
    return new Promise(async (resolve,reject) => {
        console.log('ran')
        try {
            await mongoUser.updateOne(
                {
                    user_id: user.id,
                    user_name: user.name
                }, {
                    user_id: user.id,
                    user_name: user.name,
                    user_sub: user_sub,
                    user_past_transactions: [],
                    user_favourites: [],
                    user_cart: [],
                    
                }, {
                    upsert:true,
                    _id: false,
                }
            )
            resolve();
        } catch(err) {
            console.log("error creating user")
            reject(err);
        }
    })
    
}
async function createUserWithEmail(user) {
    return new Promise(async (resolve,reject) => {
        try {
            await mongoUser.updateOne(
                {
                   
                    user_email: user.email
                }, {

                        user_id: user.user_id,
                        user_pass: user.pass,
                        user_name: user.name,
                        user_picture: user.user_picture,
                        user_sub: "standard",
                        user_past_transactions: [],
                        user_favourites: [],
                        user_cart: [],
                    
                }, {
                    upsert:true,
                }
            )
            resolve();
        } catch(err) {
            console.log("error creating user")
            reject(err);
        }
    })
}
async function getUser(userID) {
    try {
        const allUsers = userCollection.collection('users');
    const user = await allUsers.findOne({user_id: userID});
    console.log(user);
    if(user) {
        return user
    } else {
        return null;
    }} catch(error) {
            console.error('error fetching user');
            throw error;
    }
}

async function changeUserData(userID, newData) {
    return new Promise(async (resolve, reject) => {
        try {
            const allUsers = userCollection.collection('users');
            const user = await allUsers.updateOne({
                user_id: userID ,
   
            }, {
                $set: {
                    user_name: newData.new_name,
                    user_email: newData.new_email,
                    user_country: newData.new_country,
                    user_sex: newData.new_sex,
                  },
            }, {
                upsert: true
            })
            resolve(user);
        }catch(err) {
            console.error('error changing userData');
            reject(err);
        }
    })
    
}
async function changeUserSub(userID, newSub) {
    return new Promise(async (resolve,reject) => {
        try {
            const allUsers = userCollection.collection('users');
            const user = await allUsers.findOneAndUpdate({
                user_id: userID,
            } , {
                $set: {
                    user_sub: newSub
                }
            },
            {
                upsert:true,
                returnOriginal: false,
            })
            resolve(user);
        }catch(error) {
            console.error('error changing submode');
            reject(error)
        }
    })
}
async function removeItemsFromUserCart(userID) {
    return new Promise(async (resolve, reject) => {
        try {
            const allUsers = userCollection.collection('users');
            const user = await allUsers.updateOne({
                user_id: userID
            }, {
                $set: {
                    user_cart : []
                }
            })
            resolve(user);
        } catch(error) {
            console.error('Error cleaning user cart');
            reject(error);
        }
    })
}
async function decrementItemFromUserCart(userID, productID) {
    return new Promise(async (resolve, reject) => {
      try {
        const allUsers =  userCollection.collection('users')
        const currentUser = await allUsers.findOne({ user_id: userID });
  
        if (currentUser) {
          const cartItemIndex = currentUser.user_cart.findIndex(
            (item) => item.product_id === productID
          );
  
          if (cartItemIndex !== -1) {
            const currentAmount = currentUser.user_cart[cartItemIndex].product_amount;
  
            if (currentAmount > 1) {
              const newValue = currentAmount - 1;
              currentUser.user_cart[cartItemIndex].product_amount = newValue;
            } else {
                console.log(cartItemIndex)
              // Remove the item from the cart if the amount is 1 or less
              currentUser.user_cart.splice(cartItemIndex, 1);
            }
  
            const updateDocument = {
              user_cart: currentUser.user_cart,
            };
  
            const result = await allUsers.updateOne(
              { user_id: userID },
              { $set: updateDocument }
            );
  
            if (result.modifiedCount === 1) {
                console.log('ye boi')
              resolve('Updated successfully');
            } else {
              reject(new Error('User Document not updated'));
            }
          } else {
            reject(new Error('Product not found in user cart'));
          }
        } else {
          reject(new Error('User document not found or user_cart is empty'));
        }
      } catch (error) {
        reject(error);
      }
    });
  }
module.exports ={
    createUser,
    getUser,
    changeUserData,
    removeItemsFromUserCart,
    createUserWithEmail,
    decrementItemFromUserCart,
    changeUserSub
}
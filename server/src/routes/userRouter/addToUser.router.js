const express = require('express');
const {addProductToCart,addProductToFavourites} = require('./addToUser.model')
const addToUserRouter = express.Router();



addToUserRouter.post('/cart/:userid', async(req,res) => {
    const userID = req.params.userid
    const item = req.body.item;

    try{
        const ress = await addProductToCart(item, userID);
        if(!ress) {
            return res.status(404).json({message : "User not found"})
          }
        res.status(200).json({message : "Item added to the cart"})
    } catch(error) {
        res.status(500).json({message: "Internal server error"})
    }
    
}
);
addToUserRouter.post('/favourites/:userid', async(req,res) => {
    const userID = req.params.userid
    const item = req.body.item;

    try{
        const ress = await addProductToFavourites(item, userID);
        if(!ress) {
            return res.status(404).json({message : "User not found"})
          }
        res.status(200).json({message : "Item added to the favourite"})
    } catch(error) {
        res.status(500).json({message: "Internal server error"})
        console.error(error)
    }
    
}
)
module.exports  = addToUserRouter
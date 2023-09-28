const express = require('express');
const cartRouter = express.Router();
const {fetchLatestCart} = require('./cart.controller');

cartRouter.get('/getmostrecent/:userid' ,async  (req, res) => {
    const userid = req.params.userid;
   try {
    const ress = await fetchLatestCart(userid);
    if(!ress) {
        return res.status(404).json({message : "User not found"})
      }
    res.status(200).json(ress);
    return ress;
   } catch(error) {
    res.status(500).json({message: "Problem fetching cart at router level"})

   }
    
   
});
module.exports = cartRouter;
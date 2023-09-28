const express = require('express');
const removeFromUserRouter = express.Router();
const {decrementItemFromUser} = require('./removeFromUser.controller');

removeFromUserRouter.get('/:userid/:productid', async (req,res) => {
    const userid = req.params.userid;
    const productid = req.params.productid;
    try {
        const ress = decrementItemFromUser(userid, productid);
        if(!ress) {
            return res.status(404).json({message: "User not found"})
        }
        res.status(200).send(ress);
        return ress;
    } catch(error) {
        res.status(500).json({ok: false, message: "Server problem while removing item from cart."})
    }
})
module.exports = removeFromUserRouter;
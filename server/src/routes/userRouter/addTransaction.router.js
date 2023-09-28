const express = require('express');
const { v4: uuidv4 } = require('uuid');
const transactionRouter = express.Router();
const {postTransactionToDatabase, getTransactionsFromDatabase, getTransactionFromDatabaseById}  = require('./addTransaction.controller')
transactionRouter.post('/trspost', async(req,res) => {
    try {

    
    const uniqueID  = uuidv4();
    const trs = {
        trs_id: uniqueID,
        ...req.body
    }
    
    const ress = await postTransactionToDatabase(trs);
    if(!ress) {
        console.log(ress);
        return res.status(404).json({message : "User not found"})
      }
        res.status(200).json({ok: true, message: "Transaction was successfully approved."})
    } catch(error) {

        res.status(500).json({ok: false, message: "Transaction was not able to be sent to the servers. Please try again later."})
    }
} )


transactionRouter.get('/trsget/:userid', async(req,res) => {
    const userid = req.params.userid;
    try {
       const ress = await getTransactionsFromDatabase(userid);
       if(!ress) {
        return res.status(404).json({message : "User not found"})
      }
        res.status(200).send(ress);
        return ress;
    } catch(error) {

        res.status(500).json({ok:false, message: "Transactions were not successfully fetched."})
    }

})
transactionRouter.get('/trsgetbyid/:trsid', async(req,res) => {
    const trsid = req.params.trsid;
    try {
        const ress = await getTransactionFromDatabaseById(trsid);
        if(!ress) {
            return res.status(404).json({message : "User not found"})
          }
        res.status(200).send(ress);
    } catch(error) {
        res.status(500).json({message: "Server error while getting transaction"})
    }
    
})
module.exports = transactionRouter
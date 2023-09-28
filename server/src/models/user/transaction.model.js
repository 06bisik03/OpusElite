const Transaction = require('./transaction.mongo');
const mongoose = require('mongoose');
const transactionsCollection =  mongoose.connection.useDb('Transactions');
function postTransaction(transaction) {
    return new Promise(async (resolve, reject) => {
        try {
            const newTransaction  = await Transaction.updateOne({
                trs_id: transaction.trs_id
            }, {
                trs_id: transaction.trs_id,
                trs_phone_number: transaction.trs_phone_number,
                trs_postal_code: transaction.trs_postal_code,
                trs_address: transaction.trs_addressbox1 + " " + transaction.trs_addressbox2,
                trs_recipient: transaction.trs_first_name + " " +transaction.trs_last_name,
                trs_items_bought: transaction.trs_items_bought,
                trs_date: transaction.trs_date,
                trs_total: transaction.trs_total,
                trs_payment_method: transaction.trs_payment_method,
                trs_instructions: transaction.trs_instructions,
                trs_country: transaction.trs_country,
                trs_state: transaction.trs_state,
                trs_user_id: transaction.trs_user_id,
                trs_card_number: transaction.trs_card_number,
            
            }, {
                upsert: true
            })
            resolve(newTransaction);
        } catch(err) {
            console.error(err);
            reject(err);
        }
    })
}
async function getTransaction(user_id) {
        try {
            console.log(user_id)
            const allTransactions = transactionsCollection.collection('AllTransactions');
            const databaseTrs = await allTransactions.find({trs_user_id: user_id}).toArray();
            if(databaseTrs) {
                return databaseTrs;
            } else {
                return [];
            }
        } catch(error) {
            console.error('Error fetching transactions of the user')
        }
    
}
async function getTransactionById(trsid) {
    try {
        const allTransactions = transactionsCollection.collection('AllTransactions');
        const trsData = await allTransactions.findOne({trs_id: trsid});
        if(trsData) {
            return trsData; 
        }else {
            return [];
        }

    } catch(error) {
        console.error(error)
    }
}
module.exports = {
    postTransaction,
    getTransaction,
    getTransactionById
}
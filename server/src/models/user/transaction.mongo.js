const mongoose = require('mongoose');
const allTransactionsCollection = mongoose.connection.useDb('Transactions')
const transactionSchema = new mongoose.Schema({
    trs_id: {
        type : String,
        required: true
    },
    trs_user_id : {
        type: String,
        required:true
    },
    trs_phone_number: {
        type: String,
        required:true,
    },
    trs_postal_code: {
        type:String,
        required:true,
    },
    trs_address: {
        type: String,
        required: true,
    },
    trs_city: {
        type: String,
        required:true,
    },
    trs_recipient: {
        type: String,
        required:true
    },
    trs_items_bought: {
        type:[[String]],
        required: true
    },
    trs_date: {
        type: Number,
    required: true,
    }, 
    trs_total: {
        type: Number,
        required: true
    },
    trs_payment_method: {
        type: String,
        required: true,
    },
    trs_instructions: String,
    trs_country : {
        type: String,
        required: true,
    },
    trs_state : {
        type:String,
        required: true
    },
    trs_shipment_method : {
        type:String,
        required:true
    },
    trs_card_number: {
        type: String,
        required:true
    },
 
    
}, {
    collection: 'AllTransactions'
})
module.exports = allTransactionsCollection.model('Transaction', transactionSchema)
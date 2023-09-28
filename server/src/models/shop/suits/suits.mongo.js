const mongoose = require('mongoose');

const suitsSchema= new mongoose.Schema({
    suit_name: {
        type: String,
        required: true
    },
    suit_price: {
        type: Number,
        required: true
    },
    suit_color: String,
    suit_material: String,
    suit_origin: String,
    suit_image1: {
        type:String,
        required: true
    },suit_image2: {
        type:String,
        required: true
    },
    suit_image3: {
        type:String,
        required: true
    }
    ,
    suit_sex: {
        type: String,
        required: true
    }
  
})


const Suit =  mongoose.model('Suit', suitsSchema);
module.exports = Suit;
const mongoose = require('mongoose');

const shoesSchema= new mongoose.Schema({
    shoe_name: {
        type:String,
        required: true
    },
    shoe_price: {
        type: Number,
        required: true
    },
    shoe_color: {
        type: String,
        required: true
    },
    shoe_origin: String,
    shoe_material: String,
    shoe_sex: {
        type: String,
        required: true
    },
    shoe_image1: {
        type:String,
        required: true
    },shoe_image2: {
        type:String,
        required: true
    },
    shoe_image3: {
        type:String,
        required: true
    }
    ,
  
})


const Shoes= mongoose.model('Shoe', shoesSchema);
module.exports=Shoes;
const mongoose = require('mongoose');
const customSchema = new mongoose.Schema({
    custom_product_type: {
        type: String,
        required: true,
    }, 
    custom_product_colour: {
        type: String,
        required: true,
    },
    custom_product_id: {
        type: String,
        required: true,

    },
    custom_product_material: {
        type: String,
        required: true,
    }, 
    custom_product_price: {
        type: Number,
        required: true,

    },
    custom_product_image1: {
        type:String,
        required:true
    },
    custom_product_image2: {
        type:String,
        required:true
    },custom_product_image3: {
        type:String,
        required:true
    }
    ,custom_product_image4: {
        type:String,
        required:true
    }
})
const Custom = mongoose.model('Custom', customSchema);
module.exports = Custom;
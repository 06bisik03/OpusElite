const mongoose = require('mongoose');

const trousersSchema= new mongoose.Schema({
    trousers_name: {
        type:String,
        required: true
    },
    trousers_price: {
        type: Number,
        required: true
    },
    trousers_color: {
        type: String,
        required: true
    },
    trousers_origin: String,
    trousers_material: String,
    trousers_sex: String,
    trousers_image1: {
        type:String,
        required: true
    },
    trousers_image2: {
        type:String,
        required: true
    },
    trousers_image3: {
        type:String,
        required: true
    }
  
})


module.exports = mongoose.model('Trousers', trousersSchema);
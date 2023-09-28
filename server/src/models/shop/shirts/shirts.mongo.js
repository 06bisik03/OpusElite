const mongoose = require('mongoose');

const shirtsSchema= new mongoose.Schema({
    shirt_name: {
        type:String,
        required: true
    },
    shirt_price: {
        type: Number,
        required: true
    },
    shirt_color: {
        type: String,
        required: true
    },
    shirt_origin: String,
    shirt_material: String,
    shirt_sex: String,
    shirt_image1: {
        type:String,
        required: true
    },shirt_image2: {
        type:String,
        required: true
    },
    shirt_image3: {
        type:String,
        required: true
    }
    ,
  
})



module.exports = mongoose.model('Shirt', shirtsSchema);
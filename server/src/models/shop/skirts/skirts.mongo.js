const mongoose = require('mongoose');

const skirtsSchema= new mongoose.Schema({
 skirt_name: {
        type:String,
        required: true
    },
skirt_price: {
        type: Number,
        required: true
    },
skirt_color: {
        type: String,
        required: true
    },
skirt_origin: String,
skirt_material: String,
skirt_sex: String,
skirt_image1: {
    type:String,
    required: true
},skirt_image2: {
    type:String,
    required: true
},
skirt_image3: {
    type:String,
    required: true
}
,
  
})


const Skirt = mongoose.model('Skirt', skirtsSchema);
module.exports = Skirt;
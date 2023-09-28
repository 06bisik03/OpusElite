const mongoose = require('mongoose');

const blousesSchema= new mongoose.Schema({
    blouse_name: {
        type:String,
        required: true
    },
   blouse_price: {
        type: Number,
        required: true
    },
   blouse_color: {
        type: String,
        required: true
    },
    blouse_sex: String,
   blouse_origin: String,
   blouse_material: String,
   blouse_image1: String,
   blouse_image2: String,
   blouse_image3: String,

  
})


module.exports = mongoose.model('Blouse', blousesSchema);
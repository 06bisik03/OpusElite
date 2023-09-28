const mongoose = require('mongoose');

const scentsSchema= new mongoose.Schema({
    scent_name: {
        type:String,
        required: true
    },
    scent_price: {
        type: Number,
        required: true
    },
    scent_story: String,

    scent_familia: String,
    scent_sex: {
        type: String,
        required: true
    }  ,
    scent_image1: {
        type: String,
        required:true
    }
  
})


module.exports = mongoose.model('Scent', scentsSchema);
const mongoose = require("mongoose");
const userCollection = mongoose.connection.useDb('OpuseliteUsers')
const userSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
    unique: true,
  },
  user_name: {
    type: String,
    required: true,
  },
  user_email: {
    type: String,
    required:true
  },
  user_sub: {
    type: String,
    required:true
  },
  user_picture: String,
  user_favourites: {
    type: [String],
    required: true,
  },
  user_country: String,
  user_sex: String,

  user_cart: {
    type: [mongoose.Schema.Types.Mixed],
    required: true,
  },
},{
    collection: 'users', // Specify the collection name
  })

module.exports = userCollection.model("user", userSchema);

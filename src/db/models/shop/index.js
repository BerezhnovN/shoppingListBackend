const mongoose = require('mongoose');
const { Schema } = mongoose;

const ShopScheme = new Schema({
  text: String,
  data: Date,
  cost: Number
});


module.exports = Shop = mongoose.model("shoppingList", ShopScheme);
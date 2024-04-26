const mongoose = require('mongoose')

const ShopperSchema = new mongoose.Schema({
  email: String, 
  userName: String, 
  password: String
})

const ShopperModel = mongoose.model("shoppers", ShopperSchema)

module.exports = ShopperModel
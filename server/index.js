const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const ShopperModel = require('./models/Shopper')

const app = express()
app.use(express.json())
app.use(cors())
 
mongoose.connect('mongodb url')

app.post('/login', (req, res) => {
  const {email, userName, password} = req.body;
  ShopperModel.find({email: email})
  .then(shopper => {
    if(shopper) {
      if(shopper.password === password) {
        res.json('success')
      } else{
        res.json('password wrong')
      }
    } else {
      res.json('no records')
    }
  })
})

app.post('/register', (req, res) => {
  ShopperModel.create({req.body})
  .then(shoppers => res.json(shoppers))
  .catch(err => res.json(err))
})

app.listen(3001, () => {
  console.log('server running');
})
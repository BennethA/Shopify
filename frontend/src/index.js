const express = require('express')
const app = express()
const fs = require('fs')

fs.writeFile('./LoginDetails.json', 'utf-8', '1111')

app.listen(3000, () => {
  console.log('Server running');
})
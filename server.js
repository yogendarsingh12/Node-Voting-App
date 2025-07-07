const express = require('express')
const db= require('./db');
const bodyparser=require('body-parser');
const app = express()
const port = 3000

app.use(bodyparser.json());

app.get('/', (req, res) => {
  res.send('hii we are creating voting app ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

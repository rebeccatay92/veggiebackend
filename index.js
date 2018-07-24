require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const router = require('./routes/router')

const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/veggiebackend'

mongoose.Promise = global.Promise
mongoose.connect(url, { useNewUrlParser: true })

let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function () {
  console.log(`Mongoose is connected to ${url}`)
})

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/', router)

const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`Express is running on port ${port}`)
})

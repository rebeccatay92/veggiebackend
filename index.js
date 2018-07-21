require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const recipesRoute = require('./routes/recipesRoute')

const url = process.env.MONGO_URL || 'mongodb://localhost:27017/veggiebackend'

mongoose.Promise = global.Promise
mongoose.connect(url, { useNewUrlParser: true })

let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function () {
  console.log('Mongoose is connected to database')
})

const app = express()

app.get('/', (req, res) => {
  res.send('all recipes by user')
})

app.use('/recipes', recipesRoute)

const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`Express is running on port ${port}`)
})

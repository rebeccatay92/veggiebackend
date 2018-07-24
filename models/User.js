const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema({
  _id: String, // String instead of UUID for easy seeding and referencing
  username: String,
  vegCategory: String,
  avatarUrl: String,
  about: String,
  recipes: [{
    type: Schema.Types.ObjectId,
    ref: 'Recipe'
  }]
})

const User = mongoose.model('User', userSchema)

module.exports = User

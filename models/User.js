const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema({
  username: String,
  vegCategory: String,
  avatarUrl: String,
  recipes: [{
    type: Schema.Types.ObjectId,
    ref: 'Recipe'
  }]
})

const User = mongoose.model('User', userSchema)

module.exports = User

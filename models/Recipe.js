const mongoose = require('mongoose')
const Schema = mongoose.Schema

let recipeSchema = new Schema({
  title: String,
  serves: String,
  time: String,
  vegCategory: String,
  coverPhotoUrl: String,
  ingredientList: [{
    groupHeading: String,
    groupedItems: [{
      name: String,
      amount: String
    }],
    item: {
      name: String,
      amount: String
    }
  }],
  instructions: [String],
  creator: {
    type: String, // string instead of uuid for easier seed referencing
    ref: 'User'
  }
})

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe

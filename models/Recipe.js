const mongoose = require('mongoose')
const Schema = mongoose.Schema

let recipeSchema = new Schema({
  recipeTitle: String,
  servings: String,
  time: String,
  vegCategory: String,
  coverPhotoUrl: String,
  groups: [
    {
      groupHeading: String,
      groupedItems: [ { name: String, amount: String } ]
    }
  ],
  ingredients: [
    { name: String, amount: String }
  ],
  instructions: [String],
  creator: {
    type: String, // string instead of uuid for easier seed referencing
    ref: 'User'
  }
})

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe

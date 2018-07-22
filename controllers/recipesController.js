const User = require('../models/User')
const Recipe = require('../models/Recipe')

const getUserRecipes = async (req, res) => {
  // assuming user is logged in with _id = 'seededuser'
  let userId = 'seededuser'

  let userRecipes = await Recipe.find({creator: userId})

  res.send(userRecipes)
}

const getOneRecipe = async (req, res) => {
  let recipeId = req.params.id
  let foundRecipe = await Recipe.findOne({_id: recipeId})
    .populate('creator')

  // console.log('foundRecipe', foundRecipe)
  res.send(foundRecipe)
}

const createRecipe = (req, res) => {
  res.send('create new recipe')
}

module.exports = {
  getUserRecipes,
  getOneRecipe,
  createRecipe
}

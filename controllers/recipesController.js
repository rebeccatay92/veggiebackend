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
  res.send(foundRecipe)
}

const createRecipe = async (req, res) => {
  // console.log('body', req.body)
  let { recipe, userId } = req.body

  let recipeToCreate = {
    ...recipe,
    creator: userId
  }

  let newRecipe = new Recipe(recipeToCreate)

  let createdRecipeId = await newRecipe.save()
    .then(createdRecipe => {
      return createdRecipe._id
    })
  // console.log('createdRecipeId', createdRecipeId)

  let foundUser = await User.findOne({_id: userId})
  foundUser.recipes.push(createdRecipeId)
  await foundUser.save()

  res.send(createdRecipeId)
}

module.exports = {
  getUserRecipes,
  getOneRecipe,
  createRecipe
}

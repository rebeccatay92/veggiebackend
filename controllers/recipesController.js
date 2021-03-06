const User = require('../models/User')
const Recipe = require('../models/Recipe')

const getUserRecipes = async (req, res) => {
  // assuming user is logged in with _id = 'seededuser'
  let userId = 'seededuser'

  let userRecipes = await Recipe.find({creator: userId})

  res.json(userRecipes)
}

const getOneRecipe = async (req, res) => {
  let recipeId = req.params.id
  let foundRecipe = await Recipe.findOne({_id: recipeId})
    .populate('creator')
  res.json(foundRecipe)
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

  res.json(createdRecipeId)
}

const updateRecipe = async (req, res) => {
  let recipeId = req.params.id

  let modifiedRecipe = req.body.recipe

  let updatedRecipe = await Recipe.findOneAndUpdate({_id: recipeId}, modifiedRecipe)

  res.send(updatedRecipe)
}

const deleteRecipe = async (req, res) => {
  let recipeId = req.params.id

  let foundRecipe = await Recipe.findOne({_id: recipeId})

  let creatorId = foundRecipe.creator
  let creator = await User.findOne({_id: creatorId})
  creator.recipes.remove(recipeId)
  await creator.save()

  await Recipe.deleteOne({_id: recipeId})

  res.send(true)
}

module.exports = {
  getUserRecipes,
  getOneRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe
}

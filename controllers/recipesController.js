const User = require('../models/User')
const Recipe = require('../models/Recipe')

// const request = require('request')
const mockRecipes = require('../seeders/seedRecipes')

const getUserRecipes = (req, res) => {
  res.send('get users recipes')
}

const getOneRecipe = (req, res) => {
  res.send('one recipe')
}

const createRecipe = (req, res) => {
  res.send('create new recipe')
}

const seedRecipes = (req, res) => {
  mockRecipes.forEach(mock => {
    let newRecipe = new Recipe(mock)
    newRecipe.save()
  })
  res.send('seeding')
}

module.exports = {
  getUserRecipes,
  getOneRecipe,
  createRecipe,
  seedRecipes
}

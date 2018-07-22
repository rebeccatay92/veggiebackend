const express = require('express')
const router = express.Router()

const recipesController = require('../controllers/recipesController')

// router.get('/', function (req, res) {
//   res.send('entry point to assignment. show button to click to user recipes')
// })

router.get('/recipes', recipesController.getUserRecipes)

router.get('/recipes/:id', recipesController.getOneRecipe)

router.post('/recipes', recipesController.createRecipe)

router.get('/seedrecipes', recipesController.seedRecipes)

// router.put('/recipes/:id', function (req, res) {
//   res.send('update recipe')
// })
//
// router.delete('/recipes/:id', function (req, res) {
//   res.send('delete the recipe')
// })

module.exports = router

/*
restful endpoints
get '/' root
get '/recipes', user's dashboard with their own recipes
get '/recipes/:id', details for 1 recipe

post '/recipes', create new recipe
put '/recipes/:id', update recipe
delete '/recipes/:id', delete recipe
*/

const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.send('all recipes')
})

router.get('/recipes', function (req, res) {
  res.send('list of user recipes')
})

router.get('/recipes/:id', function (req, res) {
  res.send('one recipe')
})

router.post('/recipes', function (req, res) {
  res.send('create new recipe')
})

router.put('/recipes/:id', function (req, res) {
  res.send('update recipe')
})

router.delete('/recipes/:id', function (req, res) {
  res.send('delete the recipe')
})

module.exports = router

/*
restful endpoints
get '/' root, landing page with all recipes by all users
get '/recipes', user's dashboard with their own recipes
get '/recipes/:id', details for 1 recipe

post '/recipes', create new recipe
put '/recipes/:id', update recipe
delete '/recipes/:id', delete recipe
*/

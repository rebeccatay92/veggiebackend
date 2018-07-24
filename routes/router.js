const express = require('express')
const router = express.Router()

const recipesController = require('../controllers/recipesController')

const seedController = require('../controllers/seedController')

router.get('/recipes', recipesController.getUserRecipes)
router.post('/recipes', recipesController.createRecipe)

router.get('/recipes/:id', recipesController.getOneRecipe)
router.put('/recipes/:id', recipesController.updateRecipe)
router.delete('/recipes/:id', recipesController.deleteRecipe)

router.get('/reseed', seedController.reseed)
router.get('/seedusers', seedController.seedUsers)
router.get('/seedrecipes', seedController.seedRecipes)

module.exports = router

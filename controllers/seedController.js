const User = require('../models/User')
const Recipe = require('../models/Recipe')

const mockRecipes = require('../seeders/seedRecipes')
const mockUsers = require('../seeders/seedUsers')

// seeded user's _id is 'seededuser'
const seedUsers = async (req, res) => {
  await mockUsers.map(mock => {
    let newUser = new User(mock)
    return newUser.save()
  })
  res.json('finished seeding users')
}

const seedRecipes = async (req, res) => {
  await mockRecipes.map(mock => {
    let newRecipe = new Recipe(mock)
    // console.log('mocking', newRecipe)
    return newRecipe.save()
      .then(async createdRecipe => {
        let creator = await User.findOne({_id: 'seededuser'})
        creator.recipes.push(createdRecipe.id)
        return creator.save()
      })
      .catch(err => console.log('ERR', err))
  })
  res.json('finished seeding recipes')
}

const reseed = async (req, res) => {
  await User.remove({})
  await Recipe.remove({})
  await mockUsers.map(mock => {
    let newUser = new User(mock)
    return newUser.save()
  })

  await mockRecipes.map(mock => {
    let newRecipe = new Recipe(mock)
    // console.log('mocking', newRecipe)
    return newRecipe.save()
      .then(async createdRecipe => {
        let creator = await User.findOne({_id: 'seededuser'})
        creator.recipes.push(createdRecipe.id)
        return creator.save()
      })
      .catch(err => console.log('ERR', err))
  })

  res.json('ok')
}

module.exports = {
  seedUsers,
  seedRecipes,
  reseed
}

const express = require('express');

const recipe_model = require('../model/recipes');

const router = express.Router();

router.get('/recipes', async (req, res, next) => {
  try {
    const recipes = await recipe_model.find()
    res.json(recipes)
  } catch (error) {
    next(error)
  }
});

router.get('/recipes/:id/shoppinglist', async (req, res, next) => {
  try {
    const recipes = await recipe_model.getShoppingList(req.params.id)
    res.json(recipes)
  } catch (error) {
    next(error)
  }
});


router.get('/recipes/:id/instructions', async (req, res, next) => {
  try {
    const recipes = await recipe_model.getInstructions(req.params.id)
    res.json(recipes)
  } catch (error) {
    next(error)
  }
});





module.exports = router;
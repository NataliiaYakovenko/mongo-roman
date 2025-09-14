const { Router } = require("express");
const IngredientController = require("../controllers/ingridient.controller");

const ingredientRouter = Router();

ingredientRouter.post('/',IngredientController.addIngridient)
ingredientRouter.get('/',IngredientController.findIngredients)

module.exports = ingredientRouter;

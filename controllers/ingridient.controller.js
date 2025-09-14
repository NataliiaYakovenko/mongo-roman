const { Ingredient } = require("../models");

module.exports.addIngridient = async (req, res, next) => {
  try {
    const { body } = req;

    const createdIngredient = await Ingredient.create(body);

    return res.status(201).send({ data: createdIngredient });
  } catch (error) {
    next(error);
  }
};

module.exports.findIngredients = async (req, res, next) => {
  try {
    const foundIngredients = await Ingredient.find();

    return res.status(200).send({ data: foundIngredients });
  } catch (error) {
    next(error);
  }
};

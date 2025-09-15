const { Ingredient } = require("../models");


module.exports.findIngredient = async (req, res, next) => {
  try {
    const { inGredients } = req.body;

    const ingredientsArray = [];

    for (let i = 0; i < inGredients.length; i++) {
      const ingredientObject = await Ingredient.findOne({ name: inGredients[i] });

      if (ingredientObject) {
        ingredientsArray.push(ingredientObject._id);
      }
    }

    console.log("✅ IDs інгредієнтів:", ingredientsArray);

    // тут правильно: замінюємо назви інгредієнтів у body на масив ObjectId
    req.body.inGredients = ingredientsArray;

    next();
  } catch (error) {
    next(error);
  }
};


// module.exports.findIngredient = async (req, res, next) => {
//   try {
//     const {
//       body: { inGredients },
//     } = req;

//     const ingredientsArray = [];

//     for (let i = 0; i < inGredients.length; i++) {
//       const ingredientObject = await Ingredient.findOne({
//         name: inGredients[i],
//       });
  

//     //  ingredientsArray.push(ingredientObject["_id"]);
//     }

//     console.log(ingredientsArray);

//     req.inGredients = ingredientObject;
//     next();
//   } catch (error) {
//     next(error);
//   }
// };

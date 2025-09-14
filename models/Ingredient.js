const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const ingredientShema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
});

const Ingredient = mongoose.model("Ingredient", ingredientShema);

module.exports = Ingredient;

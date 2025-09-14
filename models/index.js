const mongoose = require("mongoose");
const Salad = require("./Salad");
const Ingredient = require('./Ingredient')

const DB = process.env.DB_NAME || "fe_test";

mongoose.connect(`mongodb://127.0.0.1:27017/${DB}`);

module.exports = {
  Salad, Ingredient
};

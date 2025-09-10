const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const DB = process.env.DB_NAME || "fe_test";

mongoose.connect(`mongodb://localhost:27017/${DB}`);

const saladSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  weight: { type: Number },
  inGredients: { type: Array, required: true },
  souce: { type: String },
  dietType: { type: String },
  spicy: { type: Boolean },
  expired: {
    type: Date,
    required: true,
    validate: {
      validator: (value) => {
        if (validate >= new Date()) {
          return true;
        } else {
          return false;
        }
      },
    },
  },
});

const Salad = mongoose.model("Salad", saladSchema);

module.exports = {
  Salad,
};

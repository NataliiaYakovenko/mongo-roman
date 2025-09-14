const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const saladSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  weight: { type: Number },
  inGredients: [
    {
      type: Schema.Types.ObjectId,
      ref: "Ingredient",
    },
  ],
  souce: { type: String },
  dietType: { type: String },
  spicy: { type: Boolean },
  expired: {
    type: Date,
    required: true,
    validate: {
      validator: (value) => {
        if (value >= new Date()) {
          return true;
        } else {
          return false;
        }
      },
      message: "Salad is expired",
    },
  },
});

const Salad = mongoose.model("Salad", saladSchema);

module.exports = Salad;

const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const DB = process.env.DB_NAME || "fe_test";

// start = async () => {
//   await mongoose.connect(`mongodb://127.0.0.1:27017/${DB}`);
// };

mongoose.connect(`mongodb://127.0.0.1:27017/${DB}`);

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

module.exports = {
  Salad,
};

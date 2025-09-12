const { Salad } = require("../models/index");

module.exports.createSalad = async (req, res, next) => {
  const { body } = req;
  try {
    const createdSalad = await Salad.create(body);
    if (!createdSalad) {
      return res.status(400).send("Something wrong");
    }
    return res.status(201).send({ data: createdSalad });
  } catch (error) {
    next(error);
  }
};

module.exports.getAllSalads = async (req, res, next) => {};

module.exports.getSaladById = async (req, res, next) => {
  try {
    const { saladId } = req.params;

    const foundSaladById = await Salad.findById(saladId);
    if (!foundSaladById) {
      return res.status(404).send("Salad not found");
    }
    return res.status(200).send({ data: foundSaladById });
  } catch (error) {
    next(error);
  }
};

module.exports.putSaladById = async () => {};

module.exports.deleteSaladById = async () => {};

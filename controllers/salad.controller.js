const { Salad } = require("../models/index");

module.exports.createSalad = async (req, res, next) => {
  try {
    const createdSalad = await Salad.create(req.body);

    // відразу підтягуємо інгредієнти
    const populatedSalad = await Salad.findById(createdSalad._id).populate("inGredients");

    return res.status(201).send({ data: populatedSalad });
  } catch (error) {
    next(error);
  }
};





// module.exports.createSalad = async (req, res, next) => {
//   const { body,inGredients } = req;
//   try {
//     const createdSalad = await Salad.create({...body, inGredients});
//     if (!createdSalad) {
//       return res.status(400).send("Something wrong");
//     }
//     return res.status(201).send({ data: createdSalad });
//   } catch (error) {
//     next(error);
//   }
// };

module.exports.getAllSalads = async (req, res, next) => {
  try {
    const foundAllSalads = await Salad.find({}).populate('inGredients');
    if (!foundAllSalads) {
      return res.status(404).send("Salad not found");
    }
    return res.status(200).send({ data: foundAllSalads });
  } catch (error) {
    next(error);
  }
};



module.exports.getSaladById = async (req, res, next) => {
  try {
    const { saladId } = req.params;

    const foundSaladById = await Salad.findById(saladId).populate('inGredients');

    if (!foundSaladById) {
      return res.status(404).send("Salad not found");
    }
    return res.status(200).send({ data: foundSaladById });
  } catch (error) {
    next(error);
  }
};




module.exports.putSaladById = async (req, res, next) => {
  const {
    params: { saladId },
    body,
  } = req;

  try {
    const updatedSalad = await Salad.findOneAndUpdate({ _id: saladId }, body, {
      returnDocument: "after",
    });
    if (!updatedSalad) {
      return res.status(404).send("Salad not found");
    }
    return res.status(200).send({ data: updatedSalad });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteSaladById = async (req, res, next) => {
  const { saladId } = req.params;

  try {
    const deletedSalad = await Salad.findOneAndDelete({ _id: saladId });
    if (deletedSalad) {
      return res.status(404).send("Salat not found");
    }
    return res.status(200).end();
  } catch (error) {
    next(error);
  }
};

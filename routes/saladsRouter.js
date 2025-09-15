const { Router } = require("express");
const SaladController = require("../controllers/salad.controller");
const {findIngredient} = require('../middlewares/getIngredients')

const saladRouter = Router();

saladRouter.post("/",findIngredient, SaladController.createSalad);
saladRouter.get("/", SaladController.getAllSalads);
saladRouter.get("/:saladId", SaladController.getSaladById);
saladRouter.put("/:saladId", SaladController.putSaladById);
saladRouter.delete("/:saladId", SaladController.deleteSaladById);

module.exports = saladRouter;

const { Router } = require("express");
const SaladController = require("./controllers/salad.controller");

const saladRouter = Router();

saladRouter.post("/", SaladController.createSalad);
saladRouter.get("/", SaladController.getAllSalads);
saladRouter.get("/:saladId", SaladController.getSaladById);
saladRouter.put("/:saladId", SaladController.putSaladById);
saladRouter.delete("/:saladId", SaladController.deleteSaladById);

module.exports = saladRouter;

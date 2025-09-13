const express = require("express");
const app = express();
const SaladController = require("./controllers/salad.controllers");
const { errorHandler } = require("./errorHandler");

app.use(express.json());

app.post("/", SaladController.createSalad);
app.get("/", SaladController.getAllSalads);
app.get("/:saladId", SaladController.getSaladById);
app.put("/:saladId", SaladController.putSaladById);
app.delete("/:saladId", SaladController.deleteSaladById);

app.use(errorHandler);

module.exports = app;

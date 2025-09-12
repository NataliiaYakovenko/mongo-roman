const express = require("express");
const app = express();
const SaladController = require("./controllers/salad.controllers");
const { errorHandler } = require("./errorHandler");

app.use(express.json());

app.post("/", SaladController.createSalad);
// app.get("/");
app.get("/:saladId", SaladController.getSaladById);
// app.put("/:saladId");
// app.delete("/:saladId");

app.use(errorHandler);

module.exports = app;

const { Router } = require("express");
const saladRouter = require("./saladsRouter");
const ingredientRouter = require("./ingridientsRoutes");

const router = Router();

router.use("/salads", saladRouter);
router.use("/ingredients", ingredientRouter);

module.exports = router;

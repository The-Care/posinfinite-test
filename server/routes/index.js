const express = require("express");
const router = express.Router();
const routeProduct = require("./Product");
const routeCategory = require("./Category");

const errorHandler = require("../middleware/errorHandler");

router.use("/product", routeProduct);
router.use("/category", routeCategory);

router.use(errorHandler);

module.exports = router;

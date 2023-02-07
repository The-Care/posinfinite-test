const express = require("express");
const router = express.Router();
const productController = require("../controller/ProductController");

router.get("/products", productController.readAllProduct);
router.post("/products", productController.addProduct);
router.get("/products/:id", productController.getProductById);

module.exports = router;

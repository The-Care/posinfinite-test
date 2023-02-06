const express = require("express");
const router = express.Router();
const categoryController = require("../controller/categoryController");


router.get("/categories", categoryController.readAllCategories);
router.post("/categories", categoryController.addCategory);
router.get("/categories/:id", categoryController.getCategoryById);

module.exports = router
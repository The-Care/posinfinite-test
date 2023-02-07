const { Category } = require("../models");

class categoryController {
  static async readAllCategories(req, res, next) {
    try {
      const category = await Category.findAll();
      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  }
  static async addCategory(req, res, next) {
    try {
      const { name } = req.body;
      const category = await Category.create({
        name,
      });
      res.status(201).json(category);
    } catch (error) {
      next(error);
    }
  }
  static async getCategoryById(req, res, next) {
    try {
      const { id } = req.params;
      const category = await Category.findOne({
        where: {
          id,
        },
      });
      if (!category) {
        throw {
          code: 404,
          msg: "Category not found",
        };
      }
      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = categoryController;

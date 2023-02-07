const { Product, Category, sequelize } = require("../models");

// console.log(Product);

class productController {
  static async readAllProduct(req, res, next) {
    try {
      const product = await Product.findAll({
        include: [{ model: Category }],
      });
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ msg: error });
      // next(error);
    }
  }
  static async addProduct(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const {
        name,
        description,
        price,
        mainImg,
        categoryId,
      } = req.body;
      console.log(req.body, "ini req body");
      if (!categoryId) {
        throw {
          code: 400,
          msg: "Category is required",
        };
      }
      const findCategory = await Category.findByPk(categoryId);
      if (!findCategory) throw { code: 404, msg: "Category not found" };
      //   console.log(findCategory.id, categoryId, "<<<<");
      const product = await Product.create(
        {
          name,
          slug,
          description,
          price,
          mainImg,
          categoryId: findCategory.id,
        },
        { transaction: t }
      );
      await t.commit();
      res.status(201).json(product);
    } catch (error) {
      await t.rollback();
      console.log(error);
      next(error);
    }
  }
  static async getProductById(req, res, next) {
    try {
      const { id } = req.params;
      const product = await Product.findOne({
        where: {
          id,
        },
        include: [{ model: Category }],
      });
      if (!product) {
        throw {
          code: 404,
          msg: "Product not found",
        };
      }
      console.log(product, "ini dari detail id");
      res.status(200).json({ product });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = productController;

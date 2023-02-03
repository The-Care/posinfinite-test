const fs = require('fs');
const path = require('path');
const Product = require('./model');
const config = require('../config');

async function postProduct(request, response, next) {
  try {
    const payload = request.body;
    if (request.file) {
      const tmp_path = request.file.path;
      const originalExtention = request.file.originalname.split('.')
      [request.file.originalname.split('.').length - 1];
      const filename = request.file.filename + '.' + originalExtention;
      const target_path = path.resolve(config.rootPath, `public/images/upload/${filename}`);

      const source = fs.createReadStream(tmp_path);
      const destination = fs.createWriteStream(target_path);

      source.pipe(destination);
      source.on('end', async () => {
        try {
          const product = new Product({ ...payload, image_url: filename })
          await product.save()
          return response.json({
            status: "success",
            message: "product added",
            data: {
              product
            }
          });
        } catch (error) {
          // if error, delete files that have been uploaded in the directory.
          fs.unlinkSync(target_path);
          // check if the error is due to MongoDB validation
          if (error && error.name === 'ValidationError') {
            return response.json({
              status: "error",
              message: error.message,
              fields: error.errors
            })
          }
          next(error);
        }
      });
      source.on('error', async () => {
        next(error);
      });
    } else {
      const product = new Product(payload);
      await product.save();
      return response.json({
        status: "success",
        message: "product added",
        data: {
          product
        }
      });
    }
  } catch (error) {
    if (error && error.name === 'ValidationError') {
      return response.json({
        status: "error",
        message: error.message,
        fields: error.errors,
      });
    }
    next(error);
  }
}

async function getProducts(request, response, next) {
  try {
    const { limit = 12, skip = 0, query = '' } = request.query;
    let criteria = {};

    if (query.length) {
      criteria = { ...criteria, name: { $regex: `${q}`, $options: 'i' } };
    }
    const count = await Product.find(criteria).countDocuments();
    const products = await Product.find(criteria).limit(parseInt(limit)).skip(parseInt(skip))
    return response.json({
      status: "success",
      message: "products retrieved",
      data: {
        products,
        count
      }
    });
  } catch (error) {
    next(error);
  }
}

async function getProductById(request, response, next) {
  try {
    const detailProduct = await Product.findOne({ _id: request.params.id });
    return response.json({
      status: "success",
      message: "product retrieved",
      data: {
        detailProduct
      }
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { postProduct, getProducts, getProductById };
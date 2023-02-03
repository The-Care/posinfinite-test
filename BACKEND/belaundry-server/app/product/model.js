const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const productSchema = Schema({
  name: {
    type: String,
    minlength: [3, 'The product name must be at least 3 characters long'],
    maxlength: [255, 'The maximum length of the product name is 255 characters'],
    required: [true, 'Product name is required.']
  },
  description: {
    type: String,
    maxlength: [1000, 'The maximum length of the product description is 1000 characters'],
    required: [true, 'Product description is required']
  },
  sku: {
    type: String,
    maxlength: [32, 'The maximum length of the product SKU is 32 characters'],
    required: [true, 'Product SKU is required']
  },
  stock: {
    type: Number,
    default: 0,
    required: [true, 'Product stock is required']
  },
  category: {
    type: String,
    maxlength: [48, 'The maximum length of the product category is 48 characters'],
    required: [true, 'Product category is required']
  },
  price: {
    type: Number,
    default: 0,
    required: [true, 'Product price is required']
  },
  image_url: String,
}, { timestamps: true });

module.exports = model('Product', productSchema);
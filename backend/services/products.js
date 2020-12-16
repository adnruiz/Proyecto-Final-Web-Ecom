const products = require("../models/products");
const Products = require("../models/products");

const createProduct = (product) => {
  return Products.create(product);
};

const getProducts = () => {
  return Products.find({});
};

const getProduct = (productId) => {
  return Products.findById(productId);
};

const updateProduct = (productId, product, options) => {
  return Products.findOneAndUpdate(productId, product, options);
};

module.exports = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
};

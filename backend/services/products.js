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

const deleteProduct = (productId) => {
  return Products.findByIdAndRemove(productId);
};

module.exports = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};

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

module.exports = {
  createProduct,
  getProducts,
  getProduct,
};

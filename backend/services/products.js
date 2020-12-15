const Products = require("../models/products");

const createProduct = (product) => {
  return Products.create(product);
};

const viewingProducts = () => {
  return Products.find({});
};

module.exports = {
  createProduct,
  viewingProducts,
};

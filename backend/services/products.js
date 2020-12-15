const Products = require("../models/products");

const createProduct = (product) => {
  return Products.create(product);
};

const updateProduct = (productId, product) =>{
    return Products.findByIdAndUpdate(productId, {name: 'algo'});
}

module.exports = {
  createProduct,
};

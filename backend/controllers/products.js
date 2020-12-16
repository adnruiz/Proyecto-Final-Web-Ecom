const products = require("../models/products");
const ProductsService = require("../services/products");

const getProducts = (req, res) => {
  ProductsService.getProducts()
    .then((products) => {
      return res.status(201).send(products);
    })
    .catch((error) => {
      console.log("Error viewing products", error);
      return res.status(500).send("Error viewing products");
    });
};

const getProduct = (req, res) => {
  const { productId } = req.params;
  ProductsService.getProduct(productId)
    .then((product) => {
      return res.send(product);
    })
    .catch((error) => {
      console.log("Error viewing products", error);
      return res.status(500).send("Error viewing products");
    });
};

const createProduct = (req, res) => {
  const {
    name,
    category,
    image,
    price,
    countInStock,
    brand,
    rating,
    numReviews,
    description,
  } = req.body;

  if (
    !name ||
    !category ||
    !image ||
    !price ||
    !countInStock ||
    !brand ||
    !rating ||
    !numReviews ||
    !description
  ) {
    return res.status(400).send("Missing Params!");
  }

  ProductsService.createProduct(req.body)
    .then((producto) => {
      return res.status(201).send(producto);
    })
    .catch((error) => {
      console.log("Error creating product", error);
      return res.status(500).send("Error creating product");
    });
};

module.exports = {
  createProduct,
  getProducts,
  getProduct,
};

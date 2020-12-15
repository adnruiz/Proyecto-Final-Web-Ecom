const ProductsService = require("../services/products");

const viewingProducts = (req, res) => {
  ProductsService.viewingProducts()
    .then((products) => {
      return res.status(201).send(products);
    })
    .catch((error) => {
      console.log("Error viewing product", error);
      return res.status(500).send("Error viewing product");
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
  viewingProducts,
};

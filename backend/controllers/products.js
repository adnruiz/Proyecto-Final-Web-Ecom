const ProductsService = require("../services/products");

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
};

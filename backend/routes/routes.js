const express = require("express");
const productController = require("../controllers/products");
const router = express.Router();

router.post("/products", productController.createProduct);

module.exports = router;

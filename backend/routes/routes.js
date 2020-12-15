const express = require("express");
const productController = require("../controllers/products");
const router = express.Router();

router.post("/addProducts", productController.createProduct);
router.get("/products", productController.viewingProducts);

module.exports = router;

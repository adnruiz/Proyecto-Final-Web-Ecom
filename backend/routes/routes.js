const express = require("express");
const productController = require("../controllers/products");
const router = express.Router();

router.post("/products", productController.createProduct);
router.get("/products", productController.getProducts);
router.get("/products/:productId", productController.getProduct);
router.put("/products/update/:productId", productController.updateProduct);

module.exports = router;

const express = require("express");
const productController = require("../controllers/products");
const userController = require("../controllers/usersController");
const router = express.Router();

//Products
router.post("/products", productController.createProduct);
router.get("/products", productController.getProducts);
router.get("/products/:productId", productController.getProduct);
router.put("/products/:productId", productController.updateProduct);
router.delete("/products/:productId", productController.deleteProduct);

//Users
router.post("/users", userController.createUser);
router.post("/users/signin", userController.signinUser);

module.exports = router;

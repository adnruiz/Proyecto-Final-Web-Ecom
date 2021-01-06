const express = require("express");
const productController = require("../controllers/products");
const userController = require("../controllers/usersController");
const directionsController = require("../controllers/directionController");
const ordersController = require("../controllers/ordersController");
const router = express.Router(); 

//Products
router.post("/products", productController.createProduct); 
router.get("/products", productController.getProducts);
router.get("/products/:productId", productController.getProduct);
router.put("/products/:productId", productController.updateProduct);
router.delete("/products/:productId", productController.deleteProduct);

//Users
router.post("/users/register", userController.createUser);
router.post("/users/signin", userController.signinUser);
router.put("/users/:userId", userController.updateUser);
router.delete("/users/:userId", userController.deleteUser);

//directions
router.post("/directions/register", directionsController.createDirection);

//orders
router.post("/orders", ordersController.createOrder);

module.exports = router;

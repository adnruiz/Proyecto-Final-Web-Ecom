const express = require("express");
const productController = require("./controllers/products");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
mongoose.connect("mongodb://localhost/ecomerce", { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", productController.createProduct);

// simple route
app.get("/", (req, res) => {
  res.send("Welcome to the application.");
});

// set port, listen for requests
const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

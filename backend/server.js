const express = require("express");
const productController = require("./controllers/products");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { viewingProducts } = require("./controllers/viewingProducts");

const app = express();
const mongoURL = "mongodb://localhost/ecomerce";
mongoose.connect(mongoURL, { useNewUrlParser: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", productController.createProduct);
app.use("/api", viewingProducts.viewingProducts);
// simple route
app.get("/", (req, res) => {
  res.send("Welcome to the application.");
});

// set port, listen for requests
const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
mongoose.connection.on("connected", () => {
  console.log(`Mongoose connected to ${mongoURL}`);
});

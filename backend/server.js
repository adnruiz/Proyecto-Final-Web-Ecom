const express = require("express");
const routes = require("./routes/routes");
const productController = require("./controllers/products");

const app = express();

// simple route
app.get("/", (req, res) => {
  res.send("Welcome to the application.");
});
//routes
app.get("/api/products", (req, res) => {
  res.json(data.products);
});
app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Poducto no encontrado" });
  }
});

// set port, listen for requests
const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

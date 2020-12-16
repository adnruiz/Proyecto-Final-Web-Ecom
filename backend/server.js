const express = require("express");
const productController = require("./controllers/products");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");

const app = express();
const mongoURL = "mongodb://localhost/ecomerce";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", routes);

// simple route
app.get("/", (req, res) => {
  res.send("Welcome to the application.");
});

// set port, listen for requests
const PORT = process.env.PORT || 4200;

mongoose.set("useFindAndModify", false);

mongoose.connect(mongoURL, { useNewUrlParser: true }).then(() => {
  console.log("Connected to mongoDB");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
});

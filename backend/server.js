import express from "express";
import data from "./data.js";

const app = express();

// simple route
app.get("/", (req, res) => {
  res.send("Welcome to the application.");
});
//routes
app.get("/api/products", (req, res) => {
  res.json(data.products);
});

// set port, listen for requests
const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

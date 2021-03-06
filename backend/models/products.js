const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    brand: { type: String, required: true },
    rating: { type: Number },
    numReviews: { type: Number },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Products", ProductSchema);

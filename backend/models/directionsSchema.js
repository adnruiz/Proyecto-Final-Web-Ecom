const mongoose = require("mongoose");
const { Schema } = mongoose;

const directionsSchema = new mongoose.Schema(
  {
    userId: { type: Schema.ObjectId, ref: "Users" },
    direction: { type: String, required: true, unique: true },
    location: { type: String, required: true },
    estado: { type: String, required: true },
    cp: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Directions", directionsSchema);

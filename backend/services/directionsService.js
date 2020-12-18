const Directions = require("../models/directionsSchema");

const createDirection = (direction) => {
  return Directions.create(direction);
};

module.exports = {
  createDirection,
};

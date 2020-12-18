const DirectionsController = require("../services/directionsService");

const createDirection = (req, res) => {
  const { userId, direction, location, estado, cp } = req.body;

  if (!userId || !direction || !location || !estado || !cp) {
    return res.status(400).send("Missing Params!");
  }

  DirectionsController.createDirection(req.body)
    .then((direction) => {
      return res.status(201).send(direction);
    })
    .catch((error) => {
      console.log("Error creating direction", error);
      return res.status(500).send("Error creating direction");
    });
};

module.exports = {
  createDirection,
};

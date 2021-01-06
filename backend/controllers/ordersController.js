const OrderService = require("../services/ordersService");
const { isAuth } = require("../utils");

const createOrder = (req, res) => {
  isAuth;
  const {
    orderItem,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (
    !orderItem ||
    !shippingAddress ||
    !paymentMethod ||
    !itemsPrice ||
    !shippingPrice ||
    !totalPrice
  ) {
    return res.status(400).send({ message: "Missing Params!" });
  }
  OrderService.createOrder(req.body)
    .then((order) => {
      return res.send({ message: "Orden creada con exito" }, order);
    })
    .catch((error) => {
      console.log("Error creating product", error);
      return res.status(500).send({ message: "Error creating product" });
    });
};

module.exports = {
  createOrder,
};

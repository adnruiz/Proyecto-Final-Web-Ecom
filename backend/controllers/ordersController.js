const OrderService = require("../services/ordersService");
const { isAuth } = require("../utils");

const createOrder = (req, res) => {
  isAuth; 
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (
    !orderItems ||
    !shippingAddress ||
    !paymentMethod ||
    !itemsPrice ||
    !shippingPrice ||
    !totalPrice
  ) {
    return res.status(400).send({ message: "Missing Params!" });
  }
  OrderService.createOrder(
    req.body.orderItems,
    req.body.shippingAddress,
    req.body.paymentMethod,
    req.body.itemsPrice,
    req.body.shippingPrice,
    req.body.totalPrice,
    req.user._id
  )
    .then((order) => {
      return res.status(201).send({ message: "Orden creada con exito" }, order);
    })
    .catch((error) => {
      console.log("Error creating product", error);
      return res.status(500).send({ message: "Error creating product" });
    });
};

module.exports = {
  createOrder,
};

const Orders = require("../models/orderSchema");

const createOrder = (Order) => {
  return Orders.create(Order);
};

module.exports = {
  createOrder,
};

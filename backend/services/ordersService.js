const Orders = require("../models/orderSchema");

const createOrder = (
  orderItems,
  shippingAddress,
  paymentMethod,
  itemsPrice,
  shippingPrice,
  totalPrice
) => {
  return Orders.create(
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    totalPrice
  );
};

module.exports = {
  createOrder,
};

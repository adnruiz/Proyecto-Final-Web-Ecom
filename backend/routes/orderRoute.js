const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const Order = require("../models/orderSchema");
const { isAuth } = require("../utils");

const orderRouter = express.Router();

orderRouter.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    if (req.body.orderItems.length === 0) {
      res.status(400).send({ message: "El Carrito esta vacio!" });
    } else {
      const order = new Order({
        orderItems: req.body.orderItems,
        shippingAddress: req.body.shippingAddress,
        paymentMethod: req.body.paymentMethod,
        itemPrice: req.body.itemPrice,
        shippingPrice: req.body.shippingPrice,
        totalPrice: req.body.totalPrice,
        user: req.user._id,
      });
      const createdOrder = await order.save();
      res.status(201).send({
        message: "Nueva orden creada con exito.",
        order: createdOrder,
      });
    }
  })
);

module.exports = orderRouter;

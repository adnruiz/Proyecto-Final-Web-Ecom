const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const User = require("../models/usersModel");
const userRouter = express.Router();

userRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send({ message: "User Not Found" });
    }
  })
);

module.exports = userRouter;

const Users = require("../models/usersModel");

const createUser = (user) => {
  return Users.create(user);
};

const signinUser = (email) => {
  return Users.findOne(email);
};

const updateUser = (userId, user, options) => {
  return Users.findOneAndUpdate(userId, user, options);
};

const findUser = (email) => {
  return Users.findOne(email);
};

const deleteUser = (userId) => {
  return Users.findByIdAndRemove(userId);
};

module.exports = {
  createUser,
  signinUser,
  updateUser,
  deleteUser,
  findUser,
};

const Users = require("../models/usersModel");

const createUser = (user) => {
  return Users.create(user);
};

const signinUser = (email) => {
  return Users.findOne(email);
};

module.exports = {
  createUser,
  signinUser,
};

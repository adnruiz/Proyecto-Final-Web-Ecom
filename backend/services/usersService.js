const Users = require("../models/usersModel");

const createUser = (user) => {
  return Users.create(user);
};

module.exports = {
  createUser,
};

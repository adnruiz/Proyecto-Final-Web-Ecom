const UsersService = require("../services/usersService");
const bcrypt = require("bcryptjs");

const createUser = (req, res) => {
  const { name, email, password, isAdmin } = req.body;
  req.body.password = bcrypt.hashSync(req.body.password, 8);
  if (!name || !email || !password || !isAdmin) {
    return res.status(400).send("Missing Params!");
  }

  UsersService.createUser(req.body)
    .then((user) => {
      return res.status(201).send(user);
    })
    .catch((error) => {
      console.log("Error creating user", error);
      return res.status(500).send("Error creating user");
    });
};

module.exports = {
  createUser,
};

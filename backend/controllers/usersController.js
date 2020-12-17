const UsersService = require("../services/usersService");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils");

const createUser = (req, res) => {
  const { name, email, password } = req.body;
  req.body.password = bcrypt.hashSync(req.body.password, 8);
  if (!name || !email || !password) {
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

const signinUser = async (req, res) => {
  //const { user } = req.body;
  const user = await UsersService.signinUser({ email: req.body.email });
  if (user) {
    if (bcrypt.compareSync(req.body.password, user.password)) {
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user),
      });
      return console.log("Bienvenido ", { name: user.name });
    } else {
      res.status(401).send({ message: "Cntraseña invalida" });
    }
  } else {
    res.status(401).send({ message: "Correo invalido" });
  }
};

const updateUser = (req, res) => {
  const { userId } = req.params;
  const { name, email, isAdmin, password } = req.body;

  if (!name || !email || !password || !isAdmin) {
    return res.status(400).send("Missing Params!");
  }

  UsersService.updateUser(
    { _id: userId },
    {
      $set: {
        name: req.body.name,
        email: req.body.email,
        password: req.body.email,
        isAdmin: req.body.isAdmin,
      },
    },
    { new: true }
  )
    .then((user) => {
      console.log(user);
      return res.status(201).send(user);
    })
    .catch((error) => {
      console.log("Error updating user", error);
      return res.status(500).send("Error updating user");
    });
};

const deleteUser = (req, res) => {
  const { userId } = req.params;
  UsersService.deleteUser(userId)
    .then((user) => {
      return res.status(500).send(user);
    })
    .catch((error) => {
      console.log("Error deleting user", error);
      return res.status(500).send("Error deleting user");
    });
};

module.exports = {
  createUser,
  signinUser,
  updateUser,
  deleteUser,
};

const UsersService = require("../services/usersService");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils");

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  req.body.password = bcrypt.hashSync(req.body.password, 8);
  if (!name || !email || !password) {
    return res.status(400).send("Missing Params!");
  }
  const user = await UsersService.findUser({ email: req.body.email });
  if (!user) {
    UsersService.createUser(req.body)
      .then((user) => {
        return res.status(201).send(user);
      })
      .catch((error) => {
        console.log("Error creating user", error);
        return res.status(500).send({ message: "Error creating user" });
      });
  } else {
    return res.status(400).send({ message: "El correo ya esta en uso!" });
  }
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
    return res.status(400).send({message:"faltan campos por llenar!"});
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

const findUser = (req, res) => {
  const { userId } = req.params;
  UsersService.findUser(userId)
    .then((user) => {
      return res.status(500).send(user);
    })
    .catch((error) => {
      console.log("Error finding user", error);
      return res.status(500).send("Error finding user");
    });
};

module.exports = {
  createUser,
  signinUser,
  updateUser,
  deleteUser,
  findUser,
};

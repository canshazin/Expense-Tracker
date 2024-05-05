const User = require("../models/user.js");

exports.addUser = (req, res, next) => {
  const user = {
    uname: req.body.uname,
    phone: req.body.phone,
    mail: req.body.mail,
  };

  User.create(user)
    .then((result) => {
      // Send the created user as JSON response
      res.status(201).json(result);
    })
    .catch((err) => {
      console.log("Error while adding user:", err);
      res.status(500).json({ error: "Internal server error" });
    });

  console.log(req.body.uname);
};

exports.getAllUsers = (req, res, next) => {
  User.findAll()
    .then((users) => {
      console.log(users);
      res.json(users);
    })
    .catch((err) => {
      console.log("error getting users");
    });
};

exports.getUser = (req, res, next) => {
  User.findByPk(req.url.id)
    .then((user) => {
      res.json(users);
    })
    .catch((err) => {
      console.log("error while getting sinle user");
    });
};

exports.deleteUser = (req, res, next) => {
  console.log(req.params.id);
  const userId = req.params.id;
  User.findByPk(userId)
    .then((user) => {
      return user.destroy();
    })
    .then((result) => {
      console.log("deleted successfully");
      res.json(result);
    })
    .catch((err) => {
      console.log("error while deleting");
    });
};

exports.pageNotFound = (req, res, next) => {
  res.send("no page found");
};

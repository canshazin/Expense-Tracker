const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes.js");
const sequelize = require("./util/database");
var cors = require("cors");
// app.use(bodyParser.urlencoded({ extended: false }));

const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: false }));
app.use(routes);
sequelize
  .sync()
  .then((result) => {
    // console.log(result);
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

const express = require("express");

const controller = require("../controllers/controller.js");

const router = express.Router();
router.post("/user-add", controller.addUser);
router.delete("/user-delete/:id", controller.deleteUser);
// router.put("/user-edit/:id", controller.editUser);
router.get("/users", controller.getAllUsers);
router.get("/user/:id", controller.getUser);

// /admin/add-product => GET
// router.get("/add-product", adminController.getAddProduct);
router.use("/", controller.pageNotFound);

module.exports = router;

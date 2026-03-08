const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

// CRUD
router.post("/", userController.createUser);
router.get("/", userController.getUsers);
router.get("/:id", userController.getUserById);
router.delete("/:id", userController.deleteUser);

module.exports = router;

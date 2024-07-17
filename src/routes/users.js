const express = require("express");
const router = express.Router();
const userController = require("../app/controllers/userController");
const { verifyUser, verifyAdmin } = require("../utils/verifyToken");

// add user
router.post("/", verifyUser, userController.addUser);
// update user
router.put("/:id", verifyUser, userController.updateUser);
// delete user
router.delete("/:id", verifyUser, userController.deleteUser);
// get all users
router.get("/", verifyAdmin, userController.getAllUser);
// get a user
router.get("/:id", verifyUser, userController.getAUser);

module.exports = router;

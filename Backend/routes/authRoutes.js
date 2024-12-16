const express = require("express");
const { register, login } = require("../controllers/authController");

const router = express.Router();

// Register and Login routes
router.post("/register", register);
router.post("/login", login);

module.exports = router;

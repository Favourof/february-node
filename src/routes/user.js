const express = require("express");
const { register, login } = require("../controller/user");
const { registerValidator, loginValidator } = require("../validators/user");

const router = express.Router();

router.post("/register", registerValidator, register);
router.post("/login", loginValidator, login);

module.exports = router;

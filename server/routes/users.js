const express = require("express");
const {signUp, logIn, checkUser, logoutUser} = require("../controllers/userController")
const router = express.Router();
router.post("/signup", signUp);
router.post("/login", logIn);
router.get("/checkuser", checkUser);
router.get("/logout", logoutUser);
module.exports = router;
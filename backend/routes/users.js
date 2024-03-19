const express = require("express");

const usersController = require("../controllers/users");

const userAuthentication = require("../middleware/auth");

const router = express.Router();

router.post("/user/signup", usersController.signUpUserDetails);

router.post("/user/login", usersController.loginUserDetails);

router.get(
  "/user/details",
  userAuthentication.authenticate,
  usersController.getUserDetails
);

module.exports = router;

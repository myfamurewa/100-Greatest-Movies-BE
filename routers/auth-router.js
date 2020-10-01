const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const Users = require("../models/user-models");

router.get("/google",   passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account"
  })
  );

  router.get(
    "/google/redirect",
    passport.authenticate("google", { failureRedirect: "/" }),
    (req, res) => {
      console.log("req", req.user);
      res
        .status(200)
        .cookie("token", res.req.authInfo)
        .cookie("user_id", req.user.id)
        .redirect(`${process.env.FRONTEND_URL}/profile/${req.user.id}`);
    }
  );


module.exports = router;
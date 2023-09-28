const express = require("express");
const passport = require("../../passport");
const authRouter = express.Router();
authRouter.get("/", (req, res) => {
  if (req.user) {
    res.status(200).json({ message: "You are logged in." });
  } else {
    res.status(401).json({ message: "You need to sign in." });
  }
});

authRouter.get("/checkLog", (req, res) => {
  console.log("ran once again");
  if (req.user) {
    res.status(200).json(req.user);
  } else {
    res.status(401).json({ message: "You are not authorized. Sign in first" });
  }
});

authRouter.get("/login/failed", (req, res) => {
  res.status(401).json({
    error: true,
    message: "Log in failure",
  });
});

authRouter.get(
  "/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);
authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000",
    failureRedirect: "https://localhost:8000/auth/google",
  })
);
authRouter.get("/logout", (req, res) => {
  req.logout();
  res.redirect(process.env.CLIENT_URL);
});
module.exports = authRouter;

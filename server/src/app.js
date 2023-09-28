const path = require("path");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const passport = require("passport");
const authRouter = require("./routes/auth/auth");
const cookieSession = require("cookie-session");
const { Strategy } = require("passport-google-oauth20");
require("dotenv").config();
const shopRouterMen = require("./routes/shopRouter/shopMen.router");
const shopRouterWomen = require("./routes/shopRouter/shopWomen.router");
const productRouter = require("./routes/productRouter/product.router");
const { createUserInDatabase } = require("./routes/userRouter/user.controller");
const userRouter = require("./routes/userRouter/user.router");
const addToUserRouter = require("./routes/userRouter/addToUser.router");
const transactionRouter = require("./routes/userRouter/addTransaction.router");
const removeFromUserRouter = require("./routes/userRouter/removeFromUser.router");
const { Server } = require("http");
const cartRouter = require("./routes/userRouter/cart.router");
const favsRouter = require("./routes/userRouter/favourites.router");
const customShopRouter = require("./routes/customRouter/custom.router");

const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  COOKIE_KEY_1: process.env.COOKIE_KEY_1,
  COOKIE_KEY_RESERVE: process.env.COOKIE_KEY_RESERVE,
};

const app = express();

app.use(helmet());
app.use(
  cookieSession({
    name: "session",
    maxAge: 24 * 60 * 60 * 1000,
    keys: [config.COOKIE_KEY_1, config.COOKIE_KEY_RESERVE],
    sameSite: "none",
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(
  cors({
    origin: /^http:\/\/localhost:3000/,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.status(200).json({ mess: "eyw aga" });
});
app.use('/custom', customShopRouter);
app.use("/shop/men", shopRouterMen);
app.use("/shop/women", shopRouterWomen);
app.use("/product", productRouter);
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/transaction", transactionRouter);
app.use("/favs", favsRouter);
app.use("/cart", cartRouter);
app.use("/removedata", removeFromUserRouter);
app.use("/adddata", addToUserRouter);
app.get("/failure", (req, res) => {
  return res.send("nop");
});

module.exports = app;

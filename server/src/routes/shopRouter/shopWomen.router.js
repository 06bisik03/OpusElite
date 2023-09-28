const express = require("express");
const {
  httpGetBlousesWomen,
httpGetScentsWomen,
  httpGetShoesWomen,
  httpGetSkirtsWomen,

  httpGetSuitsWomen,
} = require("./shop.controller");
const shopRouterWomen = express.Router();
shopRouterWomen.get("/suits", httpGetSuitsWomen);
shopRouterWomen.get("/blouses", httpGetBlousesWomen);
shopRouterWomen.get('/scents', httpGetScentsWomen)
shopRouterWomen.get("/skirts", httpGetSkirtsWomen);
shopRouterWomen.get("/shoes", httpGetShoesWomen);
shopRouterWomen.get("/trousers", httpGetSkirtsWomen);
module.exports = shopRouterWomen;

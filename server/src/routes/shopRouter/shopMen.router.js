const express = require('express');
const {

    httpGetScentsMen,

    httpGetShirtsMen,
    httpGetShoesMen,

    httpGetSuitsMen,

    httpGetTrousersMen,

} = require('./shop.controller');

const shopRouterMen = express.Router();
shopRouterMen.get('/', httpGetSuitsMen);
shopRouterMen.get('/suits', httpGetSuitsMen);
shopRouterMen.get('/shirts', httpGetShirtsMen);
shopRouterMen.get('/shoes', httpGetShoesMen);
shopRouterMen.get('/scents', httpGetScentsMen);
shopRouterMen.get('/trousers', httpGetTrousersMen)

module.exports = shopRouterMen;
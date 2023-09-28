const express = require('express')
const httpGetProductData= require('./product.controller')
const productRouter = express.Router();

productRouter.get('/*', httpGetProductData);
module.exports = productRouter;
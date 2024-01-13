const express = require('express');
const priceRouter = express.Router();
const priceController = require('../controllers/price.controllers');

priceRouter.get('/', priceController.getPrice)
priceRouter.post('/', priceController.createPrice)
priceRouter.delete('/', priceController.deletePrice)


module.exports = priceRouter;
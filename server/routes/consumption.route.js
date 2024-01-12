const express = require('express');
const consumptionRouter = express.Router();
const consumptionController = require('../controllers/consumption.controllers');

consumptionRouter.get('/', consumptionController.getConsumption)
consumptionRouter.post('/', consumptionController.createConsumption)
consumptionRouter.delete('/', consumptionController.deleteConsumption)


module.exports = consumptionRouter;
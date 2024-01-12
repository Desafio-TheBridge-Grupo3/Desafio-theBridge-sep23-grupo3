const express = require('express');
const totalRouter = express.Router();
const totalController = require('../controllers/total.controllers');

totalRouter.get('/:id', totalController.getTotal)
totalRouter.post('/', totalController.createTotal)
totalRouter.delete('/', totalController.deleteTotal)


module.exports = totalRouter;
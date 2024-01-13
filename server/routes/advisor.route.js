const express = require('express');
const advisorRouter = express.Router();
const advisorController = require('../controllers/advisor.controller');

advisorRouter.get('/', advisorController.getAdvisor)
advisorRouter.post('/', advisorController.createAdvisor)
advisorRouter.put('/', advisorController.updateAdvisor)
advisorRouter.delete('/', advisorController.deleteAdvisor)


module.exports = advisorRouter;
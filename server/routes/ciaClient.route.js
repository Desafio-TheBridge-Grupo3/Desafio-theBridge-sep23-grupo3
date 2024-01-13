const express = require('express');
const ciaClientRouter = express.Router();
const ciaClientController = require('../controllers/ciaClient.controllers');

ciaClientRouter.get('/', ciaClientController.getCIAClient)
ciaClientRouter.post('/', ciaClientController.createCIAClient)
ciaClientRouter.delete('/', ciaClientController.deleteCIAClient)


module.exports = ciaClientRouter;
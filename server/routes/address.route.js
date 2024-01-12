const express = require('express');
const addressRouter = express.Router();
const addressController = require('../controllers/address.controller');

addressRouter.get('/', addressController.getAddress)
addressRouter.post('/', addressController.createAddress)
addressRouter.put('/', addressController.updateAddress)
addressRouter.delete('/', addressController.deleteAddress)


module.exports = addressRouter;
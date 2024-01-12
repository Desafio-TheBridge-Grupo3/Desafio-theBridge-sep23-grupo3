const express = require('express');
const router = express.Router();
const controllers = require('../controllers/ciaConSeveral.controllers');

router.get('/:id', controllers.getCiaConSeveral);
router.get('/', controllers.getAllCiaConSeveral);
router.post('/', controllers.createCiaConSeveral);
router.put('/', controllers.updateCiaConSeveral);
router.delete('/', controllers.deleteCiaConSeveral);

module.exports = router;

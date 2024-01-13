const express = require('express');
const router = express.Router();
const controllers = require('../controllers/ciaPowSeveral.controllers');

router.get('/:id', controllers.getCiaPowSeveral);
router.get('/', controllers.getAllCiaPowSeveral);
router.post('/', controllers.createCiaPowSeveral);
router.put('/', controllers.updateCiaPowSeveral);
router.delete('/', controllers.deleteCiaPowSeveral);

module.exports = router;

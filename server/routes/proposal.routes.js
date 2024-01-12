const express = require('express');
const router = express.Router();
const controllers = require('../controllers/proposal.controllers');

router.get('/:id', controllers.getProposal);
router.get('/', controllers.getAllProposals);
router.post('/', controllers.createProposal);
router.delete('/', controllers.deleteProposal);

module.exports = router;

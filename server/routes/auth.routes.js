const express = require('express');
const router = express.Router();
const controllers = require('../controllers/webControllers/auth.controllers');

router.post('/login', controllers.login);
router.post('/signout', controllers.logout);
router.get('/currentuser/:token', controllers.checkUser);

module.exports = router;

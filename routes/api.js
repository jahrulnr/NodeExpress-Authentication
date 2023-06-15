const express = require('express');
const router = express.Router();
const { validateLogin } = require('../app/validators/user');
const auth = require('../app/middleware/auth');
const awaitHandlerFactory = require('../app/middleware/awaitHandlerFactory');
const userController = require('../app/controllers/user');

router.post('/login', validateLogin, awaitHandlerFactory(userController.userLogin));

module.exports = router;
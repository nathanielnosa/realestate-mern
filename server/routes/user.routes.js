const express = require('express');
const userController = require('../controllers/user.controller.js');
const { verifyToken } = require('../utils/verifyTokens.js');
const router = express.Router();

router.get('/', userController.test)
router.post('/update-user/:id', verifyToken, userController.updateUser)

module.exports = router;


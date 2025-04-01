const express = require('express');
const router = express.Router();
const authController = require('../controllers/authControllers');
const { validateRegister } = require('../middlewares/validation');

router.post('/register', validateRegister, authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

module.exports = router;

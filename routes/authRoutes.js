const express = require('express');
const router = express.Router();
const authController = require('../Controllers/authController');
const { authenticateToken } = require('../middleware/authMiddleware');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/getUser',  authController.getUser);
router.put('/updateUser',  authController.updateUser);
router.delete('/deleteUser',  authController.deleteUser);

module.exports = router;

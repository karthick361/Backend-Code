const express = require('express');
const router = express.Router();
const authController = require('../Controllers/authController');
const { authenticateToken } = require('../middleware/authMiddleware');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/getUsers',authenticateToken,  authController.getUsers);
router.put('/updateUser',authenticateToken,  authController.updateUser);
router.delete('/deleteUser',authenticateToken,  authController.deleteUser);

module.exports = router;

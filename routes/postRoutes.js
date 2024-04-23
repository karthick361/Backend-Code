const express = require('express');
const router = express.Router();
const postController = require('../Controllers/postController');
const { authenticateToken } = require('../middleware/authMiddleware');

router.post('/createPost', authenticateToken, postController.createPost);
router.get('/getPosts',authenticateToken, postController.getPosts);
router.get('/getPostById',authenticateToken,postController.getPostById);
router.put('/updatePost',authenticateToken,postController.updatePost);
router.delete('/deletePost',authenticateToken,postController.deletePost);

module.exports = router;

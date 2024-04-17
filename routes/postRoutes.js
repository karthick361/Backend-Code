const express = require('express');
const router = express.Router();
const postController = require('../Controllers/postController');
const { authenticateToken } = require('../middleware/authMiddleware');

router.post('/posts', authenticateToken, postController.createPost);
router.get('/posts', postController.getPosts);
router.get('/posts',postController.getPostById);
router.put('/posts',postController.updatePost);
router.delete('/posts',postController.deletePost);

module.exports = router;

const express = require('express');
const router = express.Router();
const postController = require('../Controllers/postController');
const { authenticateToken } = require('../middleware/authMiddleware');

router.post('/posts', authenticateToken, postController.createPost);
router.get('/posts', postController.getPosts);

// Other post-related routes...

module.exports = router;

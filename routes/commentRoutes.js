const express = require('express');
const router = express.Router();
const commentController = require('../Controllers/commentController');
const { authenticateToken } = require('../middleware/authMiddleware');

router.post('/posts/:postId/comments', authenticateToken, commentController.addComment);
router.get('/posts/:postId/comments', commentController.getComments);

// Other comment-related routes...

module.exports = router;

const express = require('express');
const router = express.Router();
const commentController = require('../Controllers/commentController');
const { authenticateToken } = require('../middleware/authMiddleware');

router.post('/posts/:postId/comments', authenticateToken, commentController.addComment);
router.get('/posts/:postId/comments', commentController.getComments);
router.get('/posts/:postId/comments', commentController.getCommentById);
router.put('/posts/:postId/comments', commentController.updateComment);
router.delete('/posts/:postId/comments', commentController.deleteComment);

module.exports = router;

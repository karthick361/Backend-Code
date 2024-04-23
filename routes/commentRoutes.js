const express = require('express');
const router = express.Router();
const commentController = require('../Controllers/commentController');
const { authenticateToken } = require('../middleware/authMiddleware');

router.post('/addComment', authenticateToken, commentController.addComment);
router.get('/getComments',authenticateToken, commentController.getComments);
router.get('/getCommentById', authenticateToken,commentController.getCommentById);
router.put('/updateComment',authenticateToken, commentController.updateComment);
router.delete('/deleteComment',authenticateToken, commentController.deleteComment);

module.exports = router;

const db = require('../db');

exports.addComment = (req, res) => {
    const { post_id, content, author } = req.body;
    const newComment = { post_id, content, author };

    const sql = 'INSERT INTO comments SET ?';

    db.query(sql, newComment, (err, result) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.json({ message: 'Comment added successfully!' });
    });
};

exports.getComments = (req, res) => {
    const postId = req.params.postId;
    const sql = 'SELECT * FROM comments';

    db.query(sql, postId, (err, comments) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.json(comments);
    });
};

exports.getCommentById = (req, res) => {
    const commentId = req.params.id;
    const sql = 'SELECT * FROM comments WHERE id = ?';

    db.query(sql, commentId, (err, comment) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        if (comment.length === 0) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        res.json(comment[0]);
    });
};

exports.updateComment = (req, res) => {
    const commentId = req.params.id;
    const { content, author } = req.body;
    const updatedComment = { content, author };

    const sql = 'UPDATE comments SET ? WHERE id = ?';

    db.query(sql, [updatedComment, commentId], (err, result) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        res.json({ message: 'Comment updated successfully!' });
    });
};

exports.deleteComment = (req, res) => {
    const commentId = req.params.id;
    const sql = 'DELETE FROM comments WHERE id = ?';

    db.query(sql, commentId, (err, result) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        res.json({ message: 'Comment deleted successfully!' });
    });
};


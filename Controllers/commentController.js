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
    const sql = 'SELECT * FROM comments WHERE post_id = ?';

    db.query(sql, postId, (err, comments) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.json(comments);
    });
};

// Other comment-related operations...

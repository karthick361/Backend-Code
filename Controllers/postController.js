const db = require('../db');

exports.createPost = (req, res) => {
    const { title, content, author } = req.body;
    const newPost = { title, content, author };

    const sql = 'INSERT INTO posts SET ?';

    db.query(sql, newPost, (err, result) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.json({ message: 'Post created successfully!' });
    });
};

exports.getPosts = (req, res) => {
    const sql = 'SELECT * FROM posts';

    db.query(sql, (err, posts) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.json(posts);
    });
};

exports.getPostById = (req, res) => {
    const postId = req.params.id;
    const sql = 'SELECT * FROM posts WHERE id = ?';

    db.query(sql, postId, (err, post) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        if (post.length === 0) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json(post[0]);
    });
};

exports.updatePost = (req, res) => {
    const postId = req.params.id;
    const { title, content, author } = req.body;
    const updatedPost = { title, content, author };

    const sql = 'UPDATE posts SET ? WHERE id = ?';

    db.query(sql, [updatedPost, postId], (err, result) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json({ message: 'Post updated successfully!' });
    });
};

exports.deletePost = (req, res) => {
    const postId = req.params.id;
    const sql = 'DELETE FROM posts WHERE id = ?';

    db.query(sql, postId, (err, result) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json({ message: 'Post deleted successfully!' });
    });
};


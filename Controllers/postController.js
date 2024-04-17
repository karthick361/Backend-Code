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

// Other CRUD operations for posts...

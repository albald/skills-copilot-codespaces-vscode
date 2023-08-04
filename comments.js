// Create web server
    
// Import modules
const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');
const Post = require('../models/Post');

// @route GET /comments
// @desc Get all comments
router.get('/', (req, res) => {
    Comment.find({}, (err, comments) => {
        if (err) {
            res.status(500).json({ success: false, message: err.message });
        } else {
            res.status(200).json({ success: true, data: comments });
        }
    });
});

// @route GET /comments/:id
// @desc Get a comment by id
router.get('/:id', (req, res) => {
    Comment.findById(req.params.id, (err, comment) => {
        if (err) {
            res.status(500).json({ success: false, message: err.message });
        } else {
            res.status(200).json({ success: true, data: comment });
        }
    });
});

// @route POST /comments
// @desc Create a new comment
router.post('/', (req, res) => {
    const comment = new Comment({
        content: req.body.content,
        post: req.body.post,
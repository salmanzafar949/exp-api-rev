const express = require('express');
const router = express.Router();
const Post = require('../Models/Post');

router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts)
    }catch (e) {
        res.status(500)
        res.json(e)
    }
})

module.exports = router;
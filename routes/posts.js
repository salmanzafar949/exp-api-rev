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

router.post('/', async (req, res) => {
    const post = new Post(req.body)

    const savedPost = await post.save();

    try{
        res.status(201);
        res.json(savedPost)
    }catch (e) {
        res.status(500);
        res.json(e)
    }

    /*post.save()
        .then(data => res.json(data))
        .catch(err => res.json(err))*/
})

module.exports = router;
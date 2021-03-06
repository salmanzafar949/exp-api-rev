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

router.get('/:postId', async (req, res) => {

    try{
        const post = await Post.findById(req.params.postId)
        res.status(200)
        res.json(post)
    }catch (e){
        res.json(e)
    }
})

router.put('/:postId', async (req, res) => {

    try{
        const updatedPost = await Post.updateOne({
            _id: req.params.postId
        },{
            $set: req.body
        })
        res.status(200)
        res.json(updatedPost)
    }catch (e){
        res.json(e)
    }
})

router.delete('/:postId', async (req, res) => {

    try{
        const post = await Post.remove({
            _id: req.params.postId
        })
        res.status(200)
        res.json(post)
    }catch (e){
        res.json(e)
    }
})

module.exports = router;
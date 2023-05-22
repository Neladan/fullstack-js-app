const express = require("express");
const { setPosts, getPosts, editPost, deletePost } = require("../Controllers/post.controller");
const router = express.Router();

router.get("/", getPosts);

router.post("/", setPosts);

router.put('/:id', editPost);

router.delete('/:id', deletePost)

router.patch("/like-post/:id", (req, res) => {
    res.json({ message: "Post liké : id: " + req.params.id })
})

router.patch("/dislike-post/:id", (req, res) => {
    res.json({ message: "Post liké : id: " + req.params.id })
})

module.exports = router;
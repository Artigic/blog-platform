const express = require("express");
const router = express.Router();

const Post = require("../models/Post");
const auth = require("../middleware/auth");

router.post("/", auth, async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("USER:", req.user);

    const post = await Post.create({
      title: req.body.title,
      content: req.body.content,
      author: req.user.id
    });

    res.status(201).json(post);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message
    });
  }
});

router.get("/", async (req, res) => {
  try {

    const posts = await Post.find()
      .populate("author", "name email")
      .sort({ createdAt: -1 });

    res.json(posts);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

router.get("/:id", async (req, res) => {
  try {

    const post = await Post.findById(req.params.id)
      .populate("author", "name email");

    res.json(post);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

router.put("/:id", auth, async (req, res) => {
  try {

    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        message: "Post not found"
      });
    }

    if (post.author.toString() !== req.user.id) {
      return res.status(403).json({
        message: "Unauthorized"
      });
    }

    post.title = req.body.title;
    post.content = req.body.content;

    await post.save();

    res.json(post);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {

    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        message: "Post not found"
      });
    }

    if (post.author.toString() !== req.user.id) {
      return res.status(403).json({
        message: "Unauthorized"
      });
    }

    await post.deleteOne();

    res.json({
      message: "Post deleted"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;
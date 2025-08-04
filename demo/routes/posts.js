import express from "express";
import { createPost, deletePost, getPost, getPosts, updatePost } from "../controller/postController.js"
const router = express.Router();




//GET all posts
router.get("/", getPosts);

//GET single post
router.get("/:id", getPost);

// Create new post
router.post("/", createPost);

//Update a post
router.put("/:id", updatePost);

//Delete a post
router.delete("/:id", deletePost);

export default router;

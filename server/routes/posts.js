import express from "express"
// Import getPosts and createPost from the controllers
// In React we don't need the .js but in Node we need to include .js
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js"

// import middleware auth
import auth from "../middleware/auth.js"

const router = express.Router()

// All the routes that have something to do with posts
router.get("/", getPosts)
router.post("/", auth, createPost)
router.patch("/:id", auth, updatePost)
router.delete("/:id", auth, deletePost)
router.patch("/:id/likePost", auth, likePost)

export default router

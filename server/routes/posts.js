import express from "express"
// Import getPosts and createPost from the controllers
// In React we don't need the .js but in Node we need to include .js
import { getPosts, createPost } from "../controllers/posts.js"

const router = express.Router()

// All the routes that have something to do with posts
router.get('/', getPosts)
router.post('/', createPost)

export default router
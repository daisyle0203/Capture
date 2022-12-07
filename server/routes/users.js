import express from "express"
import { signin, signup } from "../controllers/user.js"

const router = express.Router()

// All the routes that have something to do with user
router.post("/signin", signin)
router.post("/signup", signup)

export default router

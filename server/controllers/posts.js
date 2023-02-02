// This gives us access to the PostMessage model
import mongoose from "mongoose"
import PostMessage from "../models/postMessage.js"

// All the handlers for the routes
export const getPosts = async (req, res) => {
  try {
    // Find all the posts that we have in the db
    const postMessages = await PostMessage.find()

    res.status(200).json(postMessages)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createPost = async (req, res) => {
  // With POST request, we have access to req.body
  try {
    const post = req.body

    //Create a new post and pass req.body which is assigned to post
    const newPost = new PostMessage({
      ...post,
      creator: req.userId,
    })
    await newPost.save()

    res.status(201).json(newPost)
  } catch (error) {
    console.log(error)
    res.status(409).json({ message: error.message })
  }
}

export const updatePost = async (req, res) => {
  const { id: _id } = req.params
  // post is what we get from the frontend
  const post = req.body
  
  // check if the id in the params is mongoose id
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with this ID")

  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    { ...post, _id },
    { new: true }
  )

  res.json(updatedPost)
}

export const deletePost = async (req, res) => {
  const { id: _id } = req.params

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with this ID")

  await PostMessage.findByIdAndRemove(_id)

  res.json({ message: "Post deleted successfully!" })
}

export const likePost = async (req, res) => {
  const { id } = req.params

  if (!req.userId) return res.json({ message: "Unauthenticated" })

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with this ID")

  const post = await PostMessage.findById(id)

  const index = post.likes.findIndex((id) => id === String(req.userId))

  if (index == -1) {
    post.likes.push(req.userId)
  } else {
    post.likes = post.likes.filter((id) => id !== String(req.userId))
  }
  const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {
    new: true,
  })

  res.json(updatedPost)
}

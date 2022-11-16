// This gives us access to the PostMessage model
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
    const post = req.body

    //Create a new post and pass rq.body which is assigned to post
    const newPost = new PostMessage(post)

  try {
    await newPost.save()
    
    res.status(201).json(newPost)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

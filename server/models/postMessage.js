import mongoose from "mongoose"

// Create a postSchema
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String], // an array of string
  selectedFile: String, //to convert images to string using react base 64
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

// Turn the schema into a mongoose model and assign it to PostMessage
const PostMessage = mongoose.model("PostMessage", postSchema)

export default PostMessage

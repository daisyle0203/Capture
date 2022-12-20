import mongoose from "mongoose"

// Create a postSchema
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  name: String,
  creator: String,
  tags: [String], // an array of string
  selectedFile: String, //to convert images to string using react base 64
  likes: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
    get: format
  },
},
{
  toJSON: {
    getters: true
  }
})

function format(date){
  return date.toISOString()
}

// Turn the schema into a mongoose model and assign it to PostMessage
const PostMessage = mongoose.model("PostMessage", postSchema)

export default PostMessage

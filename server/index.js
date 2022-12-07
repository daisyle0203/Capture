// Import all the dependencies
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"

// Import the routes
import postRoutes from "./routes/posts.js"
import userRoutes from "./routes/users.js"

// Initial the app using express
const app = express()

// Call dotenv
dotenv.config()

// Set the limit to 30mb because we will send images which can be large in size
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: true, limit: "30mb" }));

// Use the middleware cors
// Need to specify the cors before routes
app.use(cors())

// Use the routes middleware
app.use("/posts", postRoutes)
app.use("/user", userRoutes)

// Set up port
const PORT = process.env.PORT || 5000

// Setup connection to mongodb.com
mongoose
  .connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message))

  // This is to make sure we don't have any warning in the console
mongoose.set("useFindAndModify", false)


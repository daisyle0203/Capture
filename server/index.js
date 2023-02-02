// Import all the dependencies
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import path from "path"
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
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

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Set up port
const PORT = process.env.PORT || 5001

// Setup connection to mongodb.com
mongoose
  .connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message))

// This is to make sure we don't have any warning in the console
mongoose.set("useFindAndModify", false)


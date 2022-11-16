// Use axios to make API call
import axios from 'axios';

// Use the url that is pointing to the backend route 
const url = 'http://localhost:5001/posts';

// Get all the post and then export it so we can use it somewhere else
export const fetchPosts = () => axios.get(url);
// Take the newPost and create a POST request
export const createPost = (newPost) => axios.post(url, newPost);
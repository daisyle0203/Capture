// Use axios to make API call
import axios from 'axios';

// Use the url that is pointing to the backend route 
const API = axios.create({ baseURL: "/"})


// Get all the post and then export it so we can use it somewhere else
export const fetchPosts = () => API.get("/posts");
// Take the newPost and create a POST request
export const createPost = (newPost) => API.post("/posts", newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`)
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost)
export const deletePost = (id) => API.delete(`/posts/${id}`)

export const signIn = (formData) => API.post("/user/signin", formData)
export const signUp = (formData) => API.post("/user/signup", formData)
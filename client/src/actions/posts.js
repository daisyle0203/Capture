import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from "../constants/actionTypes"
// Import everything from actions as api
// We now are be able to use fetchPosts and createPost
import * as api from "../api/index.js"

// Action Creators : function that return an action
// Action is an object with type and payload
// Use redux thunk to specify an additional arrow function to dispatch an action from the data from the backend
export const getPosts = () => async (dispatch) => {
  try {
    // Get the response from api
    // In the response, we have the data object which we return from the backend
    // Data represents the posts
    const { data } = await api.fetchPosts()

    dispatch({ type: FETCH_ALL, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    // Destructing data from the response and making POST api request to the backend server and sending post
    const { data } = await api.createPost(post)

    dispatch({ type: CREATE, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post)

    dispatch({ type: UPDATE, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id)

    dispatch({ type: DELETE, payload: id })
  } catch (error) {
    console.log(error)
  }
}

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id)
  
    dispatch({ type: LIKE, payload: data })
  } catch (error) {
    console.log(error);
  }
}
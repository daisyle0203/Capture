// Import everything from actions as api
// We now are be able to use fetchPosts and createPost
import * as api from "../api";

// Action Creators : function that return an action
// Action is an object with type and payload
// Use redux thunk to specify an additional arrow function to dispatch an action from the data from the backend
export const getPosts = () => async (dispatch) => {
    try {
      // Get the response from api
      // In the response, we have the data object which we return from the backend
      // Data represents the posts
      const { data } = await api.fetchPosts();
  
      dispatch({ type: "FETCH_ALL", payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

export const createPost = (post) => async (dispatch) => {
    try {
      // Destructing data from the response and making POST api request to the backend server and sending post
      const { data } = await api.createPost(post);
  
      dispatch({ type: "CREATE", payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
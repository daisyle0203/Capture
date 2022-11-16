import React from "react"
// Fetch the data from the global redux store with useSelector hook from redux
import { useSelector } from 'react-redux';

import Post from "./Post/Post"

import useStyles from './styles';
const Posts = () => {
  // Initialize useSelector and pass state as a parameter so we can get access to the global redux store/state
  // And then return state.posts
  const posts = useSelector((state) => state.posts); // refers to the reducers
  console.log(posts);

  const classes = useStyles();
  
  return (
    // Use react fragment to we can add multiple things in here
    <> 
      <div>Posts</div>
      <Post />
      <Post />
    </>
  )
}

export default Posts

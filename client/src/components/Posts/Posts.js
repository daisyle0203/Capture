import React from "react"
import { Grid, CircularProgress } from "@material-ui/core"
// Fetch the data from the global redux store with useSelector hook from redux
import { useSelector } from 'react-redux';

import Post from "./Post/Post"

import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  // Initialize useSelector and pass state as a parameter so we can get access to the global redux store/state
  // And then return state.posts
  const posts = useSelector((state) => state.posts); // refers to the reducers

  const classes = useStyles();
  
  return (
    // If there is no post, show the loading circle, otherwise show the posts
      !posts.length ? <CircularProgress /> : (
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {posts.map((post) => (
            <Grid key={post._id} item xs={12} sm={6}>
              <Post post={post} setCurrentId={setCurrentId} />
            </Grid>
          ))}
        </Grid>
      )
  )
}

export default Posts

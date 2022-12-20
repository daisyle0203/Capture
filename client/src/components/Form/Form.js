import React, { useState, useEffect } from "react"
import { TextField, Button, Typography, Paper } from "@material-ui/core"
import FileBase from "react-file-base64"
import { useDispatch, useSelector } from "react-redux"

import useStyles from "./styles"

import { createPost, updatePost } from "../../actions/posts"

// Get the current id
const Form = ({ currentId, setCurrentId }) => {
  console.log(currentId)
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  })
  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  )
  console.log(currentId)
  const classes = useStyles()
  const dispatch = useDispatch()

  const user = JSON.parse(localStorage.getItem("profile"))
  console.log(user)

  useEffect(() => {
    if (post) setPostData(post)
  }, [post])

  const clear = () => {
    setCurrentId(0)
    setPostData({
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (currentId === 0) {
      if(!postData.selectedFile){
        alert("You must add an image!")
        return
      }
      dispatch(createPost({ ...postData, name: user?.result?.name }))
      clear()
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }))
      clear()
    }
  }

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography>
          Please sign in to capture your own posts and like other's posts.
        </Typography>
      </Paper>
    )
  }

  // Paper is a div that has whitish background
  // In every TextField, if we do the same thing but only change the last property
  // That means all the data is going to persist while changing only the specific property
  // Set state using an object
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Editing" : "Capture"} a Memory
        </Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          minRows={4}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  )
}

export default Form

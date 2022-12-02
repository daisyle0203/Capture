import React, { useState, useEffect } from "react"
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core"
import { useDispatch } from "react-redux"

import { getPosts } from "./actions/posts"
import Posts from "./components/Posts/Posts"
import Form from "./components/Form/Form"
import capture from "./images/capture.png"
import useStyles from "./styles"

const App = () => {
  const [currentId, setCurrentId] = useState(null)
  const classes = useStyles()
  
  // Define dispatch using useDispatch hook from redux
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h4" align="center">
          Capture
        </Typography>
        <img
          className={classes.image}
          src={capture}
          alt="capture"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App

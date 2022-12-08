import React, { useState, useEffect } from "react"
import { AppBar, Typography, Toolbar, Button, Avatar } from "@material-ui/core"
import { useNavigate, useLocation } from "react-router-dom"
import { useDispatch } from "react-redux"

import { LOGOUT } from '../../constants/actionTypes';
import useStyles from "./styles"
import capture from "../../images/capture.png"

const Navbar = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile"))) 

  const logout = () => {
    dispatch({ type: LOGOUT })

    navigate("/")

    setUser(null)
  }

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")))
  }, [location])

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          className={classes.heading}
          variant="h4"
          align="center"
          onClick={() => navigate("/")}
        >
          Capture
        </Typography>
        <img
          className={classes.image}
          src={capture}
          alt="capture"
          height="60"
        />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.id}
              src={user.result.id}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/auth")}
          >
            Sign in
          </Button>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar

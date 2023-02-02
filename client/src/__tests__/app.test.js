import React from "react"
import { Provider } from "react-redux"
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux"
import thunk from "redux-thunk"
import reducers from "../reducers"
import { render } from "@testing-library/react"
import { Container } from "@material-ui/core"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import Home from "../pages/Home"
import Auth from "../components/Auth/Auth"

const store = createStore(reducers, compose(applyMiddleware(thunk)))

const AppWrapper = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Container>
    </BrowserRouter>
  </Provider>
)

test("App renders", () => {
  render(<AppWrapper />)
})

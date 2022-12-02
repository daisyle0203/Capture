import React from "react"
import ReactDOM from "react-dom"
// Initialize redux
// Provider keeps track of store which is the global state and allows us to access that store from anywhere inside of the app
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from "./reducers";  

import App from "./App"
import "./index.css" 

// Create store 
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
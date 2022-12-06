import { combineReducers } from "redux";

import posts from "./posts";
import auth from "./auth";

// Call the combineReducers and pass posts: posts
export default combineReducers({ posts, auth });
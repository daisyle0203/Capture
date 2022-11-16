// Reducer is a function that accepts a state which is posts and accept action
// Based on the action type then we can update the state
export default (posts = [], action) => {
  // action.type is the key
    switch (action.type) {
      // Specify all the types/action
      case "FETCH_ALL":
        return action.payload; // this is the actual posts
      case "CREATE":
        return [...posts, action.payload];// spread all the post and add the new post
      default:
        return posts;
    }
  };
import postsReducer from "../../../src/reducers/posts"
import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
} from "../../../src/constants/actionTypes"

describe("postsReducer", () => {
  it("should handle DELETE action", () => {
    const initialState = [
      { _id: 1, title: "Test Post 1" },
      { _id: 2, title: "Test Post 2" },
    ]
    const action = { type: DELETE, payload: 1 }

    const newState = postsReducer(initialState, action)

    expect(newState).toEqual([{ _id: 2, title: "Test Post 2" }])
  })

  it("should handle UPDATE and LIKE action", () => {
    const initialState = [
      { _id: 1, title: "Test Post 1" },
      { _id: 2, title: "Test Post 2" },
    ]
    const action = {
      type: UPDATE,
      payload: { _id: 2, title: "Test Post 2 (Updated)" },
    }

    const newState = postsReducer(initialState, action)

    expect(newState).toEqual([
      { _id: 1, title: "Test Post 1" },
      { _id: 2, title: "Test Post 2 (Updated)" },
    ])
  })

  it("should handle FETCH_ALL action", () => {
    const initialState = []
    const action = {
      type: FETCH_ALL,
      payload: [
        { _id: 1, title: "Test Post 1" },
        { _id: 2, title: "Test Post 2" },
      ],
    }

    const newState = postsReducer(initialState, action)

    expect(newState).toEqual([
      { _id: 1, title: "Test Post 1" },
      { _id: 2, title: "Test Post 2" },
    ])
  })

  it("should handle CREATE action", () => {
    const initialState = [
      { _id: 1, title: "Test Post 1" },
      { _id: 2, title: "Test Post 2" },
    ]
    const action = { type: CREATE, payload: { _id: 3, title: "Test Post 3" } }

    const newState = postsReducer(initialState, action)

    expect(newState).toEqual([
      { _id: 1, title: "Test Post 1" },
      { _id: 2, title: "Test Post 2" },
      { _id: 3, title: "Test Post 3" },
    ])
  })

  it("should return initial state if no action type matched", () => {
    const initialState = [
      { _id: 1, title: "Test Post 1" },
      { _id: 2, title: "Test Post 2" },
    ]
    const action = {
      type: "UNKNOWN",
      payload: { _id: 3, title: "Test Post 3" },
    }

    const newState = postsReducer(initialState, action)

    expect(newState).toEqual([
      { _id: 1, title: "Test Post 1" },
      { _id: 2, title: "Test Post 2" },
    ])
  })
})

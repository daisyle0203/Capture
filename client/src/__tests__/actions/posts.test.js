import { FETCH_ALL } from "../../constants/actionTypes"
import * as actions from "../../actions/posts"
import * as api from "../../api/index"

jest.mock("../../api/index.js")

describe("getPosts action creator", () => {
  it("dispatches a FETCH_ALL action with the data from the api", async () => {
    const data = [{ id: 1, title: "Test Post" }]
    api.fetchPosts.mockResolvedValue({ data })

    const dispatch = jest.fn()
    await actions.getPosts()(dispatch)
    expect(dispatch).toHaveBeenCalledWith({ type: FETCH_ALL, payload: data })
  })
})

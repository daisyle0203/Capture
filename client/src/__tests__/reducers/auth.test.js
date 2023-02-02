import { AUTH, LOGOUT } from "../../../src/constants/actionTypes"
import authReducer from "../../../src/reducers/auth"

describe("authReducer", () => {
  it("should handle initial state", () => {
    expect(authReducer(undefined, {})).toEqual({ authData: null })
  })

  it("should handle AUTH", () => {
    expect(
      authReducer(
        { authData: null },
        { type: AUTH, data: { name: "John Doe" } }
      )
    ).toEqual({ authData: { name: "John Doe" } })
  })

  it("should handle LOGOUT", () => {
    expect(
      authReducer({ authData: { name: "John Doe" } }, { type: LOGOUT })
    ).toEqual({ authData: null })
  })
})

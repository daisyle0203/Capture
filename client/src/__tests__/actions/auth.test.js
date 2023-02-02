import * as actions from "../../actions/auth"
import * as api from "../../api/index"

describe("signin", () => {
  const formData = {
    email: "user@example.com",
    password: "password",
  }

  const dispatch = jest.fn()
  const navigate = jest.fn()

  beforeEach(() => {
    api.signIn = jest.fn().mockResolvedValue({
      data: {
        email: "user@example.com",
        token: "token",
      },
    })
  })

  it("dispatches AUTH with data on success", async () => {
    await actions.signin(formData, navigate)(dispatch)

    expect(api.signIn).toHaveBeenCalledWith(formData)
    expect(dispatch).toHaveBeenCalledWith({
      type: "AUTH",
      data: {
        email: "user@example.com",
        token: "token",
      },
    })
    expect(navigate).toHaveBeenCalledWith("/")
  })
})

describe("signup", () => {
  const formData = {
    email: "user@example.com",
    password: "password",
  }

  const dispatch = jest.fn()
  const navigate = jest.fn()

  beforeEach(() => {
    api.signUp = jest.fn().mockResolvedValue({
      data: {
        email: "user@example.com",
        token: "token",
      },
    })
  })

  it("dispatches AUTH with data on success", async () => {
    await actions.signup(formData, navigate)(dispatch)

    expect(api.signUp).toHaveBeenCalledWith(formData)
    expect(dispatch).toHaveBeenCalledWith({
      type: "AUTH",
      data: {
        email: "user@example.com",
        token: "token",
      },
    })
    expect(navigate).toHaveBeenCalledWith("/")
  })
})

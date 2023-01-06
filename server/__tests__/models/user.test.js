const { MongoClient } = require("mongodb")
require("dotenv").config()

describe("insert into User", () => {
  let connection
  let db

  beforeAll(async () => {
    connection = await MongoClient.connect(process.env.CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    db = await connection.db()
  })

  afterAll(async () => {
    await connection.close()
  })

  it("should insert a user into collection", async () => {
    const users = db.collection("User")

    const mockUser = {
      name: "John",
      email: "john@email.com",
      password: "123456",
    }
    await users.insertOne(mockUser)

    const insertedUser = await users.findOne({ _id: mockUser._id })
    expect(insertedUser).toEqual(mockUser)
  })
})

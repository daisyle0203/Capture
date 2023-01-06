const { MongoClient } = require("mongodb")
require("dotenv").config()

describe("insert into postMessage", () => {
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

  it("should insert a post message into collection", async () => {
    const postMessages = db.collection("postMessage")

    const mockPostMessage = {
        tags: "testing",
        likeCount: 3,
        createdAt: "2022-11-07",
        creator: "test",
        title: "Nov 31 2022",
        message:"Best day ever!",
        selectedFile:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgICAgMCAgI…",
        likes:"639cc7b948e98bedcbccf00e"
    }
    await postMessages.insertOne(mockPostMessage)

    const insertedPostMessage = await postMessages.findOne({ _id: mockPostMessage._id })
    expect(insertedPostMessage).toEqual(mockPostMessage)
  })
})

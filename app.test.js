const request = require("supertest")
const server = require("./app")

describe("test the server facts api route", () => {
    test("response to the get request have the status code 200", async () => {
        const response = await request(server).get("/api/facts/")
        expect(response.statusCode).toBe(200)
    })
})
const request = require("supertest")("https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo");
require("dotenv").config()

describe("GET /products", function () {
  it("returns 5 products at a time", async function () {

    const response = await request.get("/products")
    .set('Authorization', process.env.TOKEN);
    
      expect(response.status).toBe(200);
      expect(response.body.length).toBe(5);

  });
});
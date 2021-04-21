const request = require("supertest")("https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo");


describe("GET /products", function () {
  it("returns 5 products at a time", async function () {

    const response = await request.get("/products")
    .set('Authorization', 'my secret');

    console.log('response-----', response.status)
      expect(response.status).toBe(200);
      expect(response.body.length).toBe(5);

  });
});
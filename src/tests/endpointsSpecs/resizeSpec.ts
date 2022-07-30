import supertest from "supertest";
import app from "../../index";

const request = supertest(app);

describe("Testing the resize endpoint malformed params", () => {
  it("testing the resize route with missing filename", async (done) => {
    request.get("/resize?width=100&height=500").expect(400, done);
  });
  it("testing the resize route with missing width", async (done) => {
    request.get("/resize?filename=fjord&height=500").expect(400, done);
  });
  it("testing the resize route with missing height", async (done) => {
    request.get("/resize?filename=fjord&width=500").expect(400, done);
    done();
  });
  it("testing the resize route with full filename", async (done) => {
    request.get("/resize?filename=fjord.jpg&width=100&height=500").expect(400, done);
    done();
  });
});

describe("Testing the resize endpoint with missing resource", () => {
  it("testing the resize route with missing filename", async (done) => {
    request.get("/resize?filename=8eqR39r5cd&width=100&height=500").expect(404, done);
    done();
  });
});

describe("Testing the resize endpoint with correct params", () => {
  it("testing the resize route with missing filename", async (done) => {
    request.get("/resize?filename=fjord&width=100&height=500").expect(200, done);
    done();
  });
});

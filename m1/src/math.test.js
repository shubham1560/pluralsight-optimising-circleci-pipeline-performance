const { sum, multiply } = require("./math");

describe("math helpers", () => {
  test("sum adds two numbers", () => {
    expect(sum(2, 3)).toBe(5);
  });

  test("multiply multiplies two numbers", () => {
    expect(multiply(4, 5)).toBe(20);
  });
});

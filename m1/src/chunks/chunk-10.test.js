const { sum, multiply } = require("../math");

describe("chunk 10", () => {
  test("addition case 10", () => {
    expect(sum(10, 1)).toBe(10 + 1);
  });

  test("multiplication case 10", () => {
    expect(multiply(10, 2)).toBe(10 * 2);
  });
});

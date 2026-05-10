const { sum, multiply } = require("../math");

describe("chunk 5", () => {
  test("addition case 5", () => {
    expect(sum(5, 1)).toBe(5 + 1);
  });

  test("multiplication case 5", () => {
    expect(multiply(5, 2)).toBe(5 * 2);
  });
});

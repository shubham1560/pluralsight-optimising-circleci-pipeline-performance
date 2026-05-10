const { sum, multiply } = require("../math");

describe("chunk 8", () => {
  test("addition case 8", () => {
    expect(sum(8, 1)).toBe(8 + 1);
  });

  test("multiplication case 8", () => {
    expect(multiply(8, 2)).toBe(8 * 2);
  });
});

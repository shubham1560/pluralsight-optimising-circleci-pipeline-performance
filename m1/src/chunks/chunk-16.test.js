const { sum, multiply } = require("../math");

describe("chunk 16", () => {
  test("addition case 16", () => {
    expect(sum(16, 1)).toBe(16 + 1);
  });

  test("multiplication case 16", () => {
    expect(multiply(16, 2)).toBe(16 * 2);
  });
});

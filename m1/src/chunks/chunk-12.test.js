const { sum, multiply } = require("../math");

describe("chunk 12", () => {
  test("addition case 12", () => {
    expect(sum(12, 1)).toBe(12 + 1);
  });

  test("multiplication case 12", () => {
    expect(multiply(12, 2)).toBe(12 * 2);
  });
});

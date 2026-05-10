const { sum, multiply } = require("../math");

describe("chunk 18", () => {
  test("addition case 18", () => {
    expect(sum(18, 1)).toBe(18 + 1);
  });

  test("multiplication case 18", () => {
    expect(multiply(18, 2)).toBe(18 * 2);
  });
});

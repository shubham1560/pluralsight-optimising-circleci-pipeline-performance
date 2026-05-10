const { sum, multiply } = require("../math");

describe("chunk 6", () => {
  test("addition case 6", () => {
    expect(sum(6, 1)).toBe(6 + 1);
  });

  test("multiplication case 6", () => {
    expect(multiply(6, 2)).toBe(6 * 2);
  });
});

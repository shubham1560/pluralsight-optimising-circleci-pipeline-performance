const { sum, multiply } = require("../math");

describe("chunk 9", () => {
  test("addition case 9", () => {
    expect(sum(9, 1)).toBe(9 + 1);
  });

  test("multiplication case 9", () => {
    expect(multiply(9, 2)).toBe(9 * 2);
  });
});

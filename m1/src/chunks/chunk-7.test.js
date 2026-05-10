const { sum, multiply } = require("../math");

describe("chunk 7", () => {
  test("addition case 7", () => {
    expect(sum(7, 1)).toBe(7 + 1);
  });

  test("multiplication case 7", () => {
    expect(multiply(7, 2)).toBe(7 * 2);
  });
});

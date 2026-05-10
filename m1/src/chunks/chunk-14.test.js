const { sum, multiply } = require("../math");

describe("chunk 14", () => {
  test("addition case 14", () => {
    expect(sum(14, 1)).toBe(14 + 1);
  });

  test("multiplication case 14", () => {
    expect(multiply(14, 2)).toBe(14 * 2);
  });
});

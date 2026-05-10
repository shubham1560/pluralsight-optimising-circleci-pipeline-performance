const { sum, multiply } = require("../math");

describe("chunk 4", () => {
  test("addition case 4", () => {
    expect(sum(4, 1)).toBe(4 + 1);
  });

  test("multiplication case 4", () => {
    expect(multiply(4, 2)).toBe(4 * 2);
  });
});

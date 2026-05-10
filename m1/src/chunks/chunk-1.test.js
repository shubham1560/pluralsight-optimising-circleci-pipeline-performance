const { sum, multiply } = require("../math");

describe("chunk 1", () => {
  test("addition case 1", () => {
    expect(sum(1, 1)).toBe(1 + 1);
  });

  test("multiplication case 1", () => {
    expect(multiply(1, 2)).toBe(1 * 2);
  });
});

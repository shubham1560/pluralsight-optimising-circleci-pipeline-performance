const { sum, multiply } = require("../math");

describe("chunk 2", () => {
  test("addition case 2", () => {
    expect(sum(2, 1)).toBe(2 + 1);
  });

  test("multiplication case 2", () => {
    expect(multiply(2, 2)).toBe(2 * 2);
  });
});

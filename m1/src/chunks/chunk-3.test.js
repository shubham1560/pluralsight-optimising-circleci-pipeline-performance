const { sum, multiply } = require("../math");

describe("chunk 3", () => {
  test("addition case 3", () => {
    expect(sum(3, 1)).toBe(3 + 1);
  });

  test("multiplication case 3", () => {
    expect(multiply(3, 2)).toBe(3 * 2);
  });
});

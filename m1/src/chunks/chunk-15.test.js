const { sum, multiply } = require("../math");

describe("chunk 15", () => {
  test("addition case 15", () => {
    expect(sum(15, 1)).toBe(15 + 1);
  });

  test("multiplication case 15", () => {
    expect(multiply(15, 2)).toBe(15 * 2);
  });
});

const { sum, multiply } = require("../math");

describe("chunk 11", () => {
  test("addition case 11", () => {
    expect(sum(11, 1)).toBe(11 + 1);
  });

  test("multiplication case 11", () => {
    expect(multiply(11, 2)).toBe(11 * 2);
  });
});

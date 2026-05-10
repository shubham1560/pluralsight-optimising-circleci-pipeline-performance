const { sum, multiply } = require("../math");

describe("chunk 17", () => {
  test("addition case 17", () => {
    expect(sum(17, 1)).toBe(17 + 1);
  });

  test("multiplication case 17", () => {
    expect(multiply(17, 2)).toBe(17 * 2);
  });
});

const { sum, multiply } = require("../math");

describe("chunk 13", () => {
  test("addition case 13", () => {
    expect(sum(13, 1)).toBe(13 + 1);
  });

  test("multiplication case 13", () => {
    expect(multiply(13, 2)).toBe(13 * 2);
  });
});

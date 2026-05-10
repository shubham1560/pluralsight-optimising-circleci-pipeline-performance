const { sum } = require("../math");

describe("many tests in one file (file-level sharding)", () => {
  for (let i = 0; i < 30; i += 1) {
    test(`increment case ${i}`, () => {
      expect(sum(i, 1)).toBe(i + 1);
    });
  }
});

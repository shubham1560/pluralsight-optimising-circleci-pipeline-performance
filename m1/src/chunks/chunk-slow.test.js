const { setTimeout: sleep } = require("node:timers/promises");
const { sum } = require("../math");

describe("imbalanced suite (one straggler file)", () => {
  test("slower than other chunk files so one parallel shard lags", async () => {
    await sleep(2000);
    expect(sum(1, 1)).toBe(2);
  }, 5000);
});

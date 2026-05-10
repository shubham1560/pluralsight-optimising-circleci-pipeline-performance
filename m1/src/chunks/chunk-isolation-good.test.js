const fs = require("fs");
const os = require("os");
const path = require("path");
const { sum } = require("../math");

describe("isolation that works under parallel CI", () => {
  test("unique temp dir per test (avoid collisions across workers)", () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "m1-clip5-"));
    try {
      const file = path.join(dir, "out.txt");
      fs.writeFileSync(file, String(sum(2, 2)), "utf8");
      expect(fs.readFileSync(file, "utf8")).toBe("4");
    } finally {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });
});

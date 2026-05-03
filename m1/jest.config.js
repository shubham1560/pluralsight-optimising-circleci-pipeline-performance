module.exports = {
  testEnvironment: "node",
  coverageDirectory: "coverage",
  collectCoverageFrom: ["src/**/*.js", "!**/*.test.js"],
  coverageReporters: ["text", "lcov", "html"],
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "test-results",
        outputName: "junit.xml",
        suiteName: "m1 tests",
        classNameTemplate: "{classname}",
        titleTemplate: "{title}",
      },
    ],
  ],
};

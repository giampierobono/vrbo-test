const base = require("../../config/jest.base.config.js");

module.exports = {
  ...base,
  collectCoverageFrom: [...base.collectCoverageFrom, "packages/store/**/*.ts"],
  coverageDirectory: "coverage/store",
  globals: {
    ...base.globals,
    "ts-jest": {
      tsConfig: "<rootDir>/packages/store/tsconfig.spec.json"
    }
  },
  rootDir: "../../",
  displayName: {
    name: "store",
    color: "redBright"
  },
  roots: [`<rootDir>/packages/store`],
  name: "@vrbo/store",
  testPathIgnorePatterns: [
    ...base.testPathIgnorePatterns,
    "api-poller",
    "data-models",
    "property-leaderboard",
    "ui-common-components"
  ]
};

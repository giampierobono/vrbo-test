const base = require("../../config/jest.base.config.js");

module.exports = {
  ...base,
  collectCoverageFrom: [
    ...base.collectCoverageFrom,
    "packages/api-poller/**/*.ts"
  ],
  coverageDirectory: "coverage/api-poller",
  globals: {
    ...base.globals,
    "ts-jest": {
      tsConfig: "<rootDir>/packages/api-poller/tsconfig.spec.json"
    }
  },
  rootDir: "../..",
  displayName: {
    name: "api-poller",
    color: "blue"
  },
  roots: [`<rootDir>/packages/api-poller`],
  name: "@vrbo/api-poller",
  testPathIgnorePatterns: [
    ...base.testPathIgnorePatterns,
    "store",
    "data-models",
    "property-leaderboard",
    "ui-common-components"
  ]
};

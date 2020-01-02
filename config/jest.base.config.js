module.exports = {
  collectCoverageFrom: [
    "!**/*.mocks.ts",
    "!**/*.model.ts",
    "!**/*.enum.ts",
    "!**/index.ts",
    "!**/types.ts",
    "!config/setupEnzyme.ts",
    "!**/node_modules/**",
    "!**/dist/**"
  ],
  coverageReporters: ["text", "cobertura", "html"],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 40,
      lines: 70,
      statements: 60
    }
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: ["ts", "tsx", "js"],
  testMatch: ["**/__tests__/**/*.spec.ts"],
  testPathIgnorePatterns: ["/node_modules/", "<rootDir>/config/setupEnzyme.ts"],
  moduleNameMapper: {
    "\\.(scss)$": "identity-obj-proxy"
  }
};

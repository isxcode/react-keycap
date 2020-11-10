// jest website -- https://jestjs.io/
// jest config -- https://jestjs.io/docs/en/configuration

module.exports = {
  collectCoverage: true,
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 50,
      functions: 50,
      lines: 50
    },
  }
}
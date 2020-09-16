module.exports = {
  testPathIgnorePatterns: [
    '/node_modules/',
    '/es',
    '/lib',
  ],
  collectCoverage: true,
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
}
module.exports = {
  roots: ['./src'],
  // testRegex: '*.test.js$',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  snapshotSerializers: ['@emotion/jest/serializer']
}

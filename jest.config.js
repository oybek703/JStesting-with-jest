module.exports = {
  ...require('./test/jest.common'),
  collectCoverageFrom: ['**/src/**/*.js'],
  coverageThreshold: {
    global: {
      statements: 28,
      branches: 19,
      functions: 25,
      lines: 29
    },
    './src/shared/utils.js': {
      statements: 100,
      branches: 80,
      functions: 100,
      lines: 100
    }
  },
  projects: ['./test/jest.lint.js', './test/jest.client.js', './test/jest.server.js']
}
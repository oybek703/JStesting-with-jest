module.exports = {
    ...require('./jest.common'),
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    snapshotSerializers: ['jest-emotion'],
    coverageThreshold: {
        global: {
            statements: 32,
            branches: 19,
            functions: 28,
            lines: 30
        },
        './src/shared/utils.js': {
            statements: 100,
            branches: 80,
            functions: 100,
            lines: 100
        }
    }
}
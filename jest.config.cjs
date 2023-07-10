module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: ['**/__tests__/**/*.test.(ts|tsx)'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
};

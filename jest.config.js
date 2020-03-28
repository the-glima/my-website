module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts'],
  coverageDirectory: 'test/static/coverage',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  verbose: true,
  globals: {
    'ts-jest': {
      diagnostics: {
        ignoreCodes: [7053, 2339]
      }
    }
  }
};

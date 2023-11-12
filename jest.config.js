module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/*.(test|spec).(ts|tsx)'],
  globals: {
    'ts-jest': {
      babelConfig: true,
      tsconfig: 'tsconfig.json',
      compiler: 'ttypescript',
    },
  },
  setupFilesAfterEnv: ['<rootDir>testConfig.ts'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageReporters: ['json', 'text', 'text-summary', 'cobertura', 'lcov'],
  reporters: [
    // This enables console output for local development and build log output in Pipelines.
    'default',

    // This is to populate the Tests tab on the Build Results page in Azure Pipelines.
    // See the "publish test results" step in ./azure-pipelines.yml.
    [
      'jest-junit',
      {
        outputDirectory: '.',
        outputName: './test-results/junit.xml',
      },
    ],
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/mocks.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/mocks.js',
  },
};

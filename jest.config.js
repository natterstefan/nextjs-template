module.exports = {
  preset: 'jest-preset-ns/presets/react',
  globals: {
    // @see https://github.com/natterstefan/jest-preset-ns/issues/4#issuecomment-765416205
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
  globalSetup: '<rootDir>/__tests__/setupEnv.ts',
  moduleNameMapper: {
    '@/(.*)': ['<rootDir>/$1', '<rootDir>/src/$1'],
  },
  setupFilesAfterEnv: ['jest-preset-ns/presets/react/jest-setup.js'],
  testMatch: ['/**/__tests__/*.test.ts', '/**/__tests__/*.test.tsx'],
}

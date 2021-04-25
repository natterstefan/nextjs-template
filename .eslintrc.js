module.exports = {
  extends: 'eslint-config-ns-ts',
  rules: {
    /**
     * This rule was disabled because of NextJS' Link API.
     *
     * @see https://github.com/vercel/next.js/issues/5533#issuecomment-573287110
     * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/402#issuecomment-368305051
     */
    'jsx-a11y/anchor-is-valid': 0,
  },
  overrides: [
    {
      files: [
        './src/**/__stories__/*.stories.ts',
        './src/**/__stories__/*.stories.tsx',
      ],
      rules: {
        'global-require': 0,
        'import/no-extraneous-dependencies': 0,
        'max-classes-per-file': 0,
        'no-console': 0,
      },
    },
    /**
     * exclude jest plugin in cypress files, because test are written
     * differently and `expect` is typed different.
     */
    {
      files: [
        './cypress/**/*.ts',
        './cypress/**/*.tsx',
        './src/**/__cypress__/*.tsx',
      ],
      extends: ['plugin:cypress/recommended'],
      rules: {
        'jest/expect-expect': 0,
        'jest/valid-expect': 0,
        'jest/valid-expect-in-promise': 0,
      },
    },
    {
      files: ['./scripts/**/*.js'],
      rules: {
        'global-require': 0,
        'import/no-extraneous-dependencies': 0,
        'no-console': 0,
        '@typescript-eslint/no-var-requires': 0,
      },
    },
  ],
}

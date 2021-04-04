module.exports = {
  ignoreFiles: [
    '**/__generated__/**/*',
    '**/__snapshots__/**/*',
    '**/build',
    '**/coverage/**/*',
    '**/node_modules',
    '**/storybook-static',
    '**/tmp',
  ],
  extends: ['stylelint-config-recommended'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
  },
}

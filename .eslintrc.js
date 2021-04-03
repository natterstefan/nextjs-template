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
}

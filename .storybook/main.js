const path = require('path')

module.exports = {
  /**
   * Storybook uses Webpack@4 by default, but we require Webpack@5 already.
   * @see https://storybook.js.org/blog/storybook-for-webpack-5/
   * @see https://gist.github.com/shilman/8856ea1786dcd247139b47b270912324#upgrade
   */
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      /**
       * NOTE: fix Storybook issue with PostCSS@8
       * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
       */
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  webpackFinal: config => {
    /**
     * Add *.scss support
     * @see https://nebulab.it/blog/nextjs-tailwind-storybook/
     */
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
    })

    /**
     * Add support for alias-imports
     * @see https://github.com/storybookjs/storybook/issues/11989#issuecomment-715524391
     */
    config.resolve.alias = {
      ...config.resolve?.alias,
      '@': [path.resolve(__dirname, '../src/'), path.resolve(__dirname, '../')],
    }
    return config
  },
}

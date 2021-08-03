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
    'storybook-addon-next-router',
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
    'storybook-react-i18next',
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

    /**
     * Fixes issue with `next-i18next` and is ready for webpack@5
     * @see https://github.com/isaachinman/next-i18next/issues/1012#issuecomment-792697008
     * @see https://github.com/storybookjs/storybook/issues/4082#issuecomment-758272734
     * @see https://webpack.js.org/migrate/5/
     *
     * source: https://github.com/isaachinman/next-i18next/issues/1012#issuecomment-818042184
     */
    config.resolve.fallback = {
      ...config.resolve?.fallback,
      fs: false,
      // tls: false,
      // net: false,
      // module: false,
      // path: require.resolve('path-browserify'),
    }

    return config
  },
}

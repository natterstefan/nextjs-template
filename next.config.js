/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins')

const nextConfig = {
  poweredByHeader: false,
  // ATTENTION: because of https://github.com/vercel/next.js/issues/21679#issuecomment-771941447
  future: {
    webpack5: true,
  },
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
  },
}

module.exports = withPlugins([], nextConfig)

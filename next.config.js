/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins')

const { i18n } = require('./next-i18next.config')
const version = require('./version')

/**
 * // @type {import('next').Config}
 * TODO: make type above work
 * - @see https://github.com/vercel/next.js/issues/8044#issuecomment-525054841
 * - @see https://github.com/vercel/next.js/pull/13429#issuecomment-634621879
 * – It should be availabe already: https://github.com/vercel/next.js/blob/canary/packages/next/next-server/server/config-shared.ts#L12
 */
const nextConfig = {
  eslint: {
    // We have manual checks in place to make sure we do not build dangerous
    // code.
    ignoreDuringBuilds: true,
  },
  i18n,
  poweredByHeader: false,
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
    VERSION: version,
  },
}

module.exports = withPlugins([], nextConfig)

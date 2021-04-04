/* eslint-disable import/no-extraneous-dependencies */
/**
 * FIX: '.env.test' being loaded properly
 * @see https://github.com/vercel/next.js/issues/17903#issuecomment-733994841
 */

import { resolve } from 'path'

import { loadEnvConfig } from '@next/env'

export default async () => {
  const pwd = process.env.PWD || resolve(__dirname, '..')
  loadEnvConfig(pwd)
}

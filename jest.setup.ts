/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-extraneous-dependencies */
import 'jest-preset-ns/presets/react/jest-setup.js'
import { setConfig } from 'next/config'
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants'
import { NextRouter } from 'next/router'

// @ts-ignore
import NextConfig from './next.config'

const { publicRuntimeConfig, serverRuntimeConfig } = NextConfig(
  PHASE_DEVELOPMENT_SERVER,
  {},
)

/**
 * Enables usage of "publicRuntimeConfig" within tests.
 * @see https://github.com/vercel/next.js/issues/4024#issuecomment-386016077
 */
setConfig({ publicRuntimeConfig, serverRuntimeConfig })

/**
 * mockRouter mocks the initial router state of Next.js
 * @see https://github.com/vercel/next.js/issues/7479#issuecomment-752418517
 *
 * FTR: other solutions like this one did not work:
 * @see https://github.com/vercel/next.js/issues/7479#issuecomment-533657701
 */
const mockRouter: NextRouter = {
  basePath: '/',
  pathname: '/',
  route: '/',
  query: {},
  asPath: '/',
  push: jest.fn(() => Promise.resolve(true)),
  replace: jest.fn(() => Promise.resolve(true)),
  reload: jest.fn(() => Promise.resolve(true)),
  prefetch: jest.fn(() => Promise.resolve()),
  back: jest.fn(() => Promise.resolve(true)),
  beforePopState: jest.fn(() => Promise.resolve(true)),
  isFallback: false,
  isLocaleDomain: false,
  isPreview: false,
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isReady: true,
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

/**
 * mockNextUseRouter and mockNextUseRouterOnce must be used in tests where one
 * needs to use Router features of Next.js. This can be either done for all
 * tests (with `beforeAll`) or on a per test basis.
 *
 * @see https://github.com/vercel/next.js/issues/7479#issuecomment-587145429
 */
export function mockNextUseRouter(props?: Partial<NextRouter>) {
  useRouter.mockImplementation(() => ({
    ...mockRouter,
    ...props,
  }))
}

export function mockNextUseRouterOnce(props?: Partial<NextRouter>) {
  useRouter.mockImplementationOnce(() => ({
    ...mockRouter,
    ...props,
  }))
}

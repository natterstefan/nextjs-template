import { Suspense } from 'react'
import { RouterContext } from 'next/dist/next-server/lib/router-context'

import '../src/styles/index.scss'

import i18n from './i18n'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // @see https://www.npmjs.com/package/storybook-addon-next-router
  nextRouter: {
    Provider: RouterContext.Provider,
    path: '/', // defaults to `/`
    asPath: '/', // defaults to `/`
    query: {}, // defaults to `{}`
    push() {}, // defaults to using addon actions integration, can override any method in the router
  },
  // @see https://github.com/stevensacks/storybook-react-i18next
  i18n,
  locale: 'en',
  locales: {
    en: 'English',
    de: 'Deutsch',
  },
}

export const decorators = [
  Story => (
    <Suspense fallback={<div>loading...</div>}>
      <Story />
    </Suspense>
  ),
]

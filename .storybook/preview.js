import { withNextRouter } from 'storybook-addon-next-router'

import '../src/styles/index.scss'

// @see https://www.npmjs.com/package/storybook-addon-next-router
export const decorators = [
  withNextRouter({
    path: '/', // defaults to `/`
    asPath: '/', // defaults to `/`
    query: {}, // defaults to `{}`
    push() {}, // defaults to using addon actions integration, can override any method in the router
  }),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

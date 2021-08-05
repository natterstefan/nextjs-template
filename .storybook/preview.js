import React, { Suspense } from 'react';
import { RouterContext } from "next/dist/next-server/lib/router-context";
// import { I18nextProvider } from 'react-i18next';
import { withI18next } from 'storybook-addon-i18next';

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
  }
}

export const decorators = [
  // Story => <I18nextProvider i18n={i18n}><Story /></I18nextProvider>,
  withI18next({ i18n, languages: { en: 'English', de: 'Deutsch' }}),
  Story => <Suspense fallback='loading...'><Story /></Suspense>
]

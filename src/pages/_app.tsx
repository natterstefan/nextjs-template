import React, { ReactNode } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { CookiesProvider } from 'react-cookie'
import { appWithTranslation } from 'next-i18next'

import '../styles/index.scss'

/**
 * Next.js Docs
 * @see https://nextjs.org/docs/advanced-features/custom-app
 *
 * Layout pattern is inspired by
 * @see https://adamwathan.me/2019/10/17/persistent-layout-patterns-in-nextjs/
 */
function App({ Component, pageProps }: AppProps) {
  const Layout =
    (Component as any).layout ||
    (({ children }: { children: ReactNode }) => <>{children}</>)

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <CookiesProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CookiesProvider>
    </>
  )
}

export default appWithTranslation(App)

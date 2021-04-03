import React from 'react'
import { AppProps } from 'next/app'

import '../styles/index.scss'

/**
 * @see https://nextjs.org/docs/advanced-features/custom-app
 */
const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App

import React from 'react'
import { AppProps } from 'next/app'

import '../styles/index.css'

/**
 * @see https://nextjs.org/docs/advanced-features/custom-app
 */
const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App

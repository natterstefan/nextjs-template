import { ReactNode } from 'react'
import { NextPage } from 'next'

type NextConfig = {
  publicRuntimeConfig: {
    NODE_ENV: string
    /**
     * version of the app
     */
    VERSION: string
  }
  serverRuntimeConfig: Record<string, unknown>
}

declare type NextPageType = NextPage & { layout: ReactNode }

declare module 'next/config' {
  export default (): NextConfig => ({
    publicRuntimeConfig: RuntimeConfig,
  })
}

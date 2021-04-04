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

declare module 'next/config' {
  export default (): NextConfig => ({
    publicRuntimeConfig: RuntimeConfig,
  })
}

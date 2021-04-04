import React from 'react'
import Head from 'next/head'

import { Navigation } from '@/components/navigation'

const Page = () => {
  return (
    <>
      <Head>
        <title>natterstefan/nextjs-template</title>
      </Head>
      <div>
        <Navigation />
        <div className="py-20">
          <h1 className="text-5xl text-center text-accent-1">
            Next.js Template
          </h1>
        </div>
      </div>
    </>
  )
}

export default Page

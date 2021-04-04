import React from 'react'
import Head from 'next/head'

import { Navigation } from '@/components/navigation'
import { Page } from '@/components/page'
import { AppLayout } from '@/layouts/AppLayout'

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>natterstefan/nextjs-template</title>
      </Head>
      <Page>
        <Page.Content>
          <Navigation />
          <div className="py-20">
            <h1 className="text-5xl text-center text-accent-1">
              Next.js Template
            </h1>
          </div>
        </Page.Content>
      </Page>
    </>
  )
}

IndexPage.layout = AppLayout

export default IndexPage

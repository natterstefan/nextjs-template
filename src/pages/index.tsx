import React from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Navigation } from '@/components/navigation'
import { Page } from '@/components/page'
import { AppLayout } from '@/layouts/AppLayout'
import { NextPageType } from '@/types/next'

const IndexPage: NextPageType = () => {
  const { t } = useTranslation('common')

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
              {t('headline')}
            </h1>
          </div>
        </Page.Content>
      </Page>
    </>
  )
}

IndexPage.layout = AppLayout

export const getStaticProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(locale && (await serverSideTranslations(locale, ['common']))),
  },
})

export default IndexPage

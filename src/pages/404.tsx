import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'

import { Page } from '@/components/page'

const NotFoundPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>404 - Not Found</title>
      </Head>
      <Page>
        <Page.Content>
          <div className="flex flex-col justify-center min-h-screen">
            <div className="p-4 rounded-md bg-red-50">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-red-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">Error</h3>
                  <div className="mt-2 text-sm text-red-700">
                    <p>Not found!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Page.Content>
      </Page>
    </>
  )
}

export default NotFoundPage

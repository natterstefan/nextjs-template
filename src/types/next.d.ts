import { ReactNode } from 'react'
import { NextPage } from 'next'

declare type NextPageType = NextPage & { layout: ReactNode }

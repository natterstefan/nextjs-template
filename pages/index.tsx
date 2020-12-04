import React from 'react'

import { Navigation } from '../components/navigation'

const Page = () => {
  return (
    <div>
      <Navigation />
      <div className="py-20">
        <h1 className="text-5xl text-center text-accent-1">
          Next.js{' '}
          <span aria-label="fire" role="img">
            🔥
          </span>{' '}
          Tailwind Template
        </h1>
      </div>
    </div>
  )
}

export default Page

import React, { FC } from 'react'

export const AppLayout: FC = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <main
          className="relative flex-1 overflow-y-auto focus:outline-none"
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
          tabIndex={0}
        >
          {children}
        </main>
      </div>
    </div>
  )
}

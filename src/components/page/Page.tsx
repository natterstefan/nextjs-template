import React, { FunctionComponent } from 'react'

const Content: FunctionComponent = ({ children }) => {
  return <div>{children}</div>
}

export function Page({ children }: React.PropsWithChildren<any>) {
  return <div className="w-full p-4 sm:p-6">{children} </div>
}

Page.Content = Content

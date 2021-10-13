import React from 'react'
import { AppProps } from 'next/app'
import 'normalize.css'
import '../styles/globals.css'

const App: React.VFC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default App

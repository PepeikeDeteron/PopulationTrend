import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import 'normalize.css'
import '../styles/globals.css'

const App: React.VFC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Population Trend</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="manifest"
          href="https://population-trend.vercel.app/manifest.json"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          property="description"
          content="地域経済分析システム「RESAS-API」から取得した都道府県別の総人口推移グラフを表示するサイトです"
        />
        <meta property="og:title" content="Population Trend" />
        <meta property="og:site_name" content="Population Trend" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://population-trend.vercel.app" />
        <meta
          property="og:description"
          content="地域経済分析システム「RESAS-API」から取得した都道府県別の総人口推移グラフを表示するサイトです"
        />
        <meta
          property="og:image"
          content="https://population-trend.vercel.app/favicon.ico"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App

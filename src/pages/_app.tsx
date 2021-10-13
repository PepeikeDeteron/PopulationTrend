import React from 'react'
import Head from '@/components/Head'
import { AppProps } from 'next/app'
import 'normalize.css'
import '../styles/globals.css'

const App: React.VFC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head
        title="Population Trend"
        description="地域経済分析システム「RESAS-API」から取得した都道府県別の総人口推移グラフを表示するサイトです"
        keyword="都道府県 人口 推移 グラフ"
        url="https://population-trend.vercel.app"
      />
      <Component {...pageProps} />
    </>
  )
}

export default App

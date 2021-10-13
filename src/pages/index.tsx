import React from 'react'
import Head from 'next/head'
import Template from '@/pages/Home'

const Home: React.VFC = () => {
  return (
    <>
      <Head>
        <title>都道府県別 総人口推移グラフ</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="description"
          content="地域経済分析システム「RESAS-API」から取得した都道府県別の総人口推移グラフを表示するサイトです"
        />
        <meta property="og:title" content="都道府県別 総人口推移グラフ" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://population-trend.vercel.app" />
        <meta
          property="og:description"
          content="地域経済分析システム「RESAS-API」から取得した都道府県別の総人口推移グラフを表示するサイトです"
        />
        <meta property="og:image" content="/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Template />
    </>
  )
}

export default Home

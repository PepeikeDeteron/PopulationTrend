import React from 'react'
import Head from 'next/head'
import Template from '@/pages/Home'

const Home: React.VFC = () => {
  return (
    <>
      <Head>
        <title>都道府県別 総人口推移グラフ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Template />
    </>
  )
}

export default Home

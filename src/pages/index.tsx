import React from 'react'
import Head from 'next/head'
import Template from '@/layouts/homeLayout'

const Home: React.VFC = () => {
  return (
    <>
      <Head>
        <title>Hello World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Template />
    </>
  )
}

export default Home

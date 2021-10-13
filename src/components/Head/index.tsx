import React from 'react'
import Head from 'next/head'

type Props = {
  title: string
  description: string
  keyword: string
  url: string
}

const Component: React.VFC<Props> = ({ title, description, keyword, url }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`/favicon.png`} />
      <meta property="og:site_name" content={title} />
      <meta name="keywords" content={keyword} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`/favicon.png`} />
      <meta name="theme-color" content="#1976d2" />
      <meta property="description" content={description} />
      <link rel="canonical" href={url} />
      <link rel="icon" href="/favicon.png" />
      <link rel="manifest" href={`${url}/manifest.json`} />
    </Head>
  )
}

export default Component

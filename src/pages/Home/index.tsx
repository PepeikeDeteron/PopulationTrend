import React, { useCallback, useEffect, useState } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { Prefectures, ChartProps } from '@/@types'
import Chart from '@/components/Chart'
import CheckboxList from '@/components/CheckboxList'
import Header from '@/components/Header'
import { getPopulation } from '@/pages/api/getPopulation'
import { getPrefectures } from '@/pages/api/getPrefectures'

type ContainerProps = {
  prefectures: Prefectures[]
  prefPopulation: ChartProps[]
  onGetPrefPopulation: (
    checked: any,
    prefCode: number,
    prefName: string
  ) => void
}

type Props = {
  className?: string
} & ContainerProps

const Component: React.VFC<Props> = (props) => {
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
        <meta name="theme-color" content="#1976d2" />
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

      <Header title="都道府県別 総人口推移グラフ" />
      <div className={props.className}>
        <h3 className="checkbox-list-title">都道府県</h3>
        <CheckboxList
          prefectures={props.prefectures}
          population={props.prefPopulation}
          onGetPrefPopulation={props.onGetPrefPopulation}
        />
        <div className="chart-area">
          <Chart populationData={props.prefPopulation} />
        </div>
      </div>
    </>
  )
}

const StyledComponent = styled(Component)`
  padding: 4rem 10vh;

  .checkbox-list-title {
    padding-bottom: 1rem;
  }

  .chart-area {
    padding-top: 5rem;
  }

  @media screen and (max-width: 599px) {
    padding: 2rem 3vh;
  }
`

const Container: React.VFC<Partial<ContainerProps>> = () => {
  const [prefectures, setPrefectures] = useState<Prefectures[]>([])
  const [prefPopulation, setPrefPopulation] = useState<ChartProps[]>([])

  // 都道府県一覧を取得
  useEffect(() => {
    getPrefectures()
      .then((res) => {
        setPrefectures(res as Prefectures[])
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  // 各都道府県の人口推移データを取得
  const onGetPrefPopulation = useCallback(
    (
      checked: boolean,
      prefCode: Prefectures['prefCode'],
      prefName: Prefectures['prefName']
    ) => {
      const prevPrefPopulation = [...prefPopulation] // 配列を複製

      // チェックが押されたときの処理
      if (checked) {
        getPopulation(prefCode, prefName)
          .then((res) => {
            prevPrefPopulation.push({
              prefName: prefName,
              value: res as ChartProps['value'],
            })

            setPrefPopulation(prevPrefPopulation)
          })

          .catch((error) => {
            console.error(error)
          })
      }
      // チェックを外した時の処理
      else {
        const deleteIndex = prevPrefPopulation.findIndex(
          (index) => index.prefName === prefName
        )

        if (deleteIndex !== -1) prevPrefPopulation.splice(deleteIndex, 1)

        setPrefPopulation(prevPrefPopulation)
      }
    },
    [prefPopulation]
  )

  const containerProps = {
    prefectures,
    prefPopulation,
    onGetPrefPopulation,
  }

  return <StyledComponent {...{ ...(containerProps as ContainerProps) }} />
}

export default Container

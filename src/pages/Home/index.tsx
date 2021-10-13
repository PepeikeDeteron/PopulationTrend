import React, { useCallback, useEffect, useState } from 'react'
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
      // チェックが押されたときの処理
      if (checked) {
        const prevPrefPopulation = [...prefPopulation] // 配列を複製

        getPopulation(prefCode, prefName)
          .then((res) => {
            prevPrefPopulation.push({
              prefName: prefName,
              value: res as ChartProps['value'],
            })

            setPrefPopulation(prevPrefPopulation)
            console.log(prevPrefPopulation)
          })

          .catch((error) => {
            console.error(error)
          })
      } else {
        console.log('else')
      }
    },
    [getPopulation]
  )

  const containerProps = {
    prefectures,
    prefPopulation,
    onGetPrefPopulation,
  }

  return <StyledComponent {...{ ...(containerProps as ContainerProps) }} />
}

export default Container

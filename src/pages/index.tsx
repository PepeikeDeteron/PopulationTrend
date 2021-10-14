import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { PrefecturesProps, ChartProps } from '@/@types'
import Chart from '@/components/Chart'
import CheckboxList from '@/components/CheckboxList'
import Header from '@/components/Header'
import { getPopulation } from '@/pages/api/getPopulation'
import { getPrefectures } from '@/pages/api/getPrefectures'

type ContainerProps = {
  prefectures: PrefecturesProps[]
  prefPopulation: ChartProps[]
  onGetPrefPopulation: (
    checked: boolean,
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
  const [prefectures, setPrefectures] = useState<PrefecturesProps[]>([])
  const [prefPopulation, setPrefPopulation] = useState<ChartProps[]>([])

  // 都道府県一覧を取得
  useEffect(() => {
    getPrefectures()
      .then((res) => {
        setPrefectures(res as PrefecturesProps[])
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  // 各都道府県の人口推移データを取得
  const onGetPrefPopulation = useCallback(
    (
      checked: boolean,
      prefCode: PrefecturesProps['prefCode'],
      prefName: PrefecturesProps['prefName']
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

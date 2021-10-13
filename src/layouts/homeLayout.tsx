import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Prefectures, Population } from '@/@types'
import Chart from '@/components/Chart'
import CheckboxList from '@/components/CheckboxList'
import Header from '@/components/Header'
import { getPopulation } from '@/pages/api/getPopulation'
import { getPrefectures } from '@/pages/api/getPrefectures'

type ContainerProps = {
  prefectures: Prefectures[]
  population: Population[]
  onGetPopulation: (prefCode: number) => void
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
          population={props.population}
          onGetPopulation={props.onGetPopulation}
        />
        <div className="chart-area">
          <Chart prefectureCode={props.onGetPopulation} />
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

const Container: React.VFC<ContainerProps> = () => {
  const [prefectures, setPrefectures] = useState<Prefectures[]>([])
  const [population, setPopulation] = useState<Population[]>([])

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
  const onGetPopulation = useCallback(
    (prefCode: number) => {
      getPopulation(prefCode)
        .then((res) => {
          setPopulation(res as Population[])
        })
        .catch((error) => {
          console.error(error)
        })
    },
    [getPopulation]
  )

  const containerProps = {
    prefectures,
    population,
    onGetPopulation,
  }

  return <StyledComponent {...{ ...containerProps }} />
}

export default Container

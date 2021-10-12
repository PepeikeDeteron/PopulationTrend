import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Prefectures, Population } from '@/@types'
import Checkbox from '@/components/Checkbox'
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
  const { className, prefectures, population, onGetPopulation } = props

  return (
    <>
      <div className={className}>
        {prefectures &&
          prefectures.map((prefecture) => (
            <Checkbox
              key={prefecture.prefCode}
              id={prefecture.prefCode}
              name={prefecture.prefName}
              onClick={() => onGetPopulation(prefecture.prefCode)}
            />
          ))}
      </div>

      {/* 仮実装 */}
      {population}
    </>
  )
}

const StyledComponent = styled(Component)`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`

const Container: React.VFC<Partial<ContainerProps>> = () => {
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

export default React.memo(Container)

import React from 'react'
import styled from 'styled-components'
import { Prefectures, Population } from '@/@types'
import Checkbox from '@/components/Checkbox'

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

const Container: React.VFC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />
}

export default React.memo(Container)

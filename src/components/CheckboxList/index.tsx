import React from 'react'
import styled from 'styled-components'
import { Prefectures, ChartProps } from '@/@types'
import Checkbox from '@/components/Checkbox'

type ContainerProps = {
  prefectures: Prefectures[]
  population: ChartProps[]
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
  const { className, prefectures, onGetPrefPopulation } = props

  return (
    <>
      <div className={className}>
        {prefectures &&
          prefectures.map((prefecture) => (
            <Checkbox
              key={prefecture.prefCode}
              id={prefecture.prefCode}
              name={prefecture.prefName}
              onClick={(event) =>
                onGetPrefPopulation(
                  event.target.checked,
                  prefecture.prefCode,
                  prefecture.prefName
                )
              }
            />
          ))}
      </div>
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

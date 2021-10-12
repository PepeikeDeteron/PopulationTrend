import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Prefectures } from '@/@types'
import Checkbox from '@/components/Checkbox'
import { getPrefectures } from '@/pages/api/getPrefectures'

type ContainerProps = {
  prefectures: Prefectures[]
}

type Props = {
  className?: string
} & ContainerProps

const Component: React.VFC<Props> = (props) => {
  const { className, prefectures } = props

  return (
    <div className={className}>
      {prefectures &&
        prefectures.map((prefecture) => (
          <Checkbox
            key={prefecture.prefCode}
            id={prefecture.prefCode}
            name={prefecture.prefName}
          />
        ))}
    </div>
  )
}

const StyledComponent = styled(Component)`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`

const Container: React.VFC<Partial<ContainerProps>> = () => {
  const [prefectures, setPrefectures] = useState<Prefectures[]>([])

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

  const containerProps = {
    prefectures,
  }

  return <StyledComponent {...{ ...containerProps }} />
}

export default React.memo(Container)

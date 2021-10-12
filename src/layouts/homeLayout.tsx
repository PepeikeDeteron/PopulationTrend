import React from 'react'
import styled from 'styled-components'
import Header from '@/components/Header'
import { getPopulation } from '@/pages/api/getPopulation'
import { getPrefectures } from '@/pages/api/getPrefectures'

type ContainerProps = {
  children?: React.ReactNode
}

type Props = {
  className?: string
} & ContainerProps

const Component: React.VFC<Props> = (props) => {
  return (
    <>
      <Header title="都道府県別 総人口推移グラフ" />
      <h2>API 呼び出しボタン テスト表示</h2>
      <button onClick={() => getPrefectures()}>都道府県呼び出し</button>
      <button onClick={() => getPopulation(13)}>東京都総人口呼び出し</button>
      {props?.children}
    </>
  )
}

const StyledComponent = styled(Component)``

const Container: React.VFC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />
}

export default React.memo(Container)

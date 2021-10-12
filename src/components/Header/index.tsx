import React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
}

const Component: React.VFC<Props> = (props) => {
  const { className } = props

  return (
    <>
      <header className={className}>
        <p className="title">都道府県別 総人口推移グラフ</p>
      </header>
    </>
  )
}

const StyledComponent = styled(Component)`
  background-color: #1976d2;

  .title {
    padding: 1.5rem;
    color: white;
    font-size: 2.5rem;
    text-align: center;
  }
`

const Container: React.VFC<Props> = (props) => {
  return <StyledComponent {...props} />
}

export default React.memo(Container)

import React from 'react'
import styled from 'styled-components'
import Checkbox from '@/components/Checkbox'

type Props = {
  className?: string
}

const Component: React.VFC<Props> = (props) => {
  const { className } = props
  return (
    <div className={className}>
      <Checkbox content="北海道" />
      <Checkbox content="青森県" />
      <Checkbox content="岩手県" />
      <Checkbox content="宮城県" />
      <Checkbox content="秋田県" />
      <Checkbox content="山形県" />
      <Checkbox content="福島県" />

      <Checkbox content="北海道" />
      <Checkbox content="青森県" />
      <Checkbox content="岩手県" />
      <Checkbox content="宮城県" />
      <Checkbox content="秋田県" />
      <Checkbox content="山形県" />
      <Checkbox content="福島県" />
    </div>
  )
}

const StyledComponent = styled(Component)`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`

const Container: React.VFC<Props> = (props) => {
  return <StyledComponent {...props} />
}

export default React.memo(Container)

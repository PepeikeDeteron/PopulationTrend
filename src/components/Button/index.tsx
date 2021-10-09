import React from 'react'
import styled from 'styled-components'

type ContainerProps = {
  label: string
}

type Props = {
  className?: string
} & ContainerProps

const Component: React.VFC<Props> = (props) => {
  return <button>{props.label}</button>
}

const StyledComponent = styled(Component)``

const Container: React.VFC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />
}

export default React.memo(Container)

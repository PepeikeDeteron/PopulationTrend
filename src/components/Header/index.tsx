import React from 'react'
import styled from 'styled-components'

type ContainerProps = {
  title: string
}

type Props = {
  className?: string
} & ContainerProps

const Component: React.VFC<Props> = (props) => {
  const { className, title } = props

  return (
    <>
      <header className={className}>
        <h2 className="title">{title}</h2>
      </header>
    </>
  )
}

const StyledComponent = styled(Component)`
  background-color: #1976d2;

  .title {
    padding: 1.5rem;
    color: white;
    text-align: center;
  }
`

const Container: React.VFC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />
}

export default React.memo(Container)

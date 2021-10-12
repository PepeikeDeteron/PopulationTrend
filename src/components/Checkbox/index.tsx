import React from 'react'
import styled from 'styled-components'

type ContainerProps = {
  // children: React.ReactNode
  content: string
}

type Props = {
  className?: string
} & ContainerProps

const Component: React.VFC<Props> = (props) => {
  const { className, content } = props

  return (
    <div className={className}>
      <input type="checkbox" id="prefCode-01" name="prefName-北海道" />
      <label htmlFor="prefCode-01">
        {/* {children} */}
        {content}
      </label>
    </div>
  )
}

const StyledComponent = styled(Component)`
  display: inline-block;
  padding: 0.5rem;

  label,
  input[type='checkbox'] {
    margin-right: 0.5rem;
    cursor: pointer;
  }
`

const Container: React.VFC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />
}

export default React.memo(Container)

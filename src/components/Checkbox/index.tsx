import React from 'react'
import styled from 'styled-components'

type ContainerProps = {
  id: number
  name: string
  onClick: () => void
}

type Props = {
  className?: string
} & ContainerProps

const Component: React.VFC<Props> = (props) => {
  const { className, id, name, onClick } = props

  return (
    <div className={className}>
      <input
        type="checkbox"
        id={`prefCode-${id}`}
        name={`prefName-${name}`}
        onClick={onClick}
      />
      <label htmlFor={`prefCode-${id}`}>{name}</label>
    </div>
  )
}

const StyledComponent = styled(Component)`
  display: inline-block;
  padding: 0.5rem;
  width: 10rem;

  label,
  input[type='checkbox'] {
    margin-right: 0.5rem;
    cursor: pointer;
    user-select: none;
  }
`

const Container: React.VFC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />
}

export default React.memo(Container)

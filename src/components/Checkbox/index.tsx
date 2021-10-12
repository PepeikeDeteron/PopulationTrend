import React from 'react'
import styled from 'styled-components'

type ContainerProps = {
  id: number
  name: string
}

type Props = {
  className?: string
} & ContainerProps

const Component: React.VFC<Props> = (props) => {
  const { className, id, name } = props

  return (
    <div className={className}>
      <input type="checkbox" id={`prefCode-${id}`} name={`prefName-${name}`} />
      <label htmlFor={`prefCode-${id}`}>
        {/* ラベルの文字数を4文字の県名に揃える */}
        {name.length === 3 ? name + '　' : name}
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
    user-select: none;
  }
`

const Container: React.VFC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />
}

export default React.memo(Container)

import React from 'react'
import styled from 'styled-components'
import CheckboxList from '@/components/CheckboxList'
import Header from '@/components/Header'

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
      <div className={props.className}>
        <h3 className="checkbox-list-title">都道府県</h3>
        <CheckboxList />
        {props?.children}
      </div>
    </>
  )
}

const StyledComponent = styled(Component)`
  padding: 4rem 10vh;

  .checkbox-list-title {
    padding-bottom: 1rem;
  }

  @media screen and (max-width: 599px) {
    padding: 2rem 3vh;
  }
`

const Container: React.VFC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />
}

export default Container

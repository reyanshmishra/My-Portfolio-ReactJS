import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
`

const ERROR = styled.h1`
  text-align: center;
  color: black;
  font-size: 55px;
  font-family: Avenir-Black;
  font-style: italic;
`

const PageNotFound = () => (
  <Wrapper>
    <ERROR>
      404 <br />
      {'Page not found.'}
    </ERROR>
  </Wrapper>
)

export default PageNotFound

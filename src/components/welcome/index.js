import React, { Component } from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import Images from '../../Images'

class Welcome extends Component {
  render() {
    return (
      <Wrapper>
        <BackgroundImage>
          <Gradient>
            <Helmet>
              <title>Reyansh-Welcome</title>
            </Helmet>
            <HelloWorld>
              Hello World;
              <br />
              <br />
              {'I am'}
            </HelloWorld>
            <Name>
              <b>
                Reyansh
                <br /> Mishra
              </b>
            </Name>
            <br />
            <Skill>Mobile / Web Developer</Skill>
          </Gradient>
        </BackgroundImage>
      </Wrapper>
    )
  }
}
export default Welcome
const BackgroundImage = styled.div`
  background-image: url(${Images.Background});
  @media (max-width: 766px) {
    background-image: url(${Images.BackgroundMini});
  }
  flex-direction: column;
  justify-content: center;
  flex: 1;
  width: 100%;
  display: flex;
`
const Gradient = styled.div`
  flex-direction: column;
  justify-content: center;
  flex: 1;
  width: 100%;
  display: flex;
  background: linear-gradient(rgba(18, 19, 20, 0.55) 100%, rgba(110, 108, 108, 0) 0%);
`
const Wrapper = styled.div`
  background-size: 100%;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;
`

const HelloWorld = styled.h4`
  font-family: Avenir-Black;
  font-style: italic;
  font-size: 24px;
  color: white !important;
  text-align: center;
`
const Name = styled.h1`
  text-align: center;
  color: rgb(255, 255, 255);
  font-size: 55px;
  font-family: Avenir-Black;
  font-style: italic;
`

const Skill = styled.h4`
  text-align: center;
  color: rgb(255, 255, 255);
  font-size: 20px;
  font-style: italic;
  font-family: Avenir-Black;
`

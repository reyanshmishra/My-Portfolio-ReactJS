import React, { Component } from 'react'
import styled from 'styled-components'
import MyImage from '../../assets/img/background_image.png'

class Welcome extends Component {
  render() {
    return (
      <Wrapper>
        <HelloWorld>
          Hello World;
          <br />
          <br />
          {"I'M"}
        </HelloWorld>
        <Name>
          <b>
            Reyansh
            <br /> Mishra
          </b>
        </Name>
        <br />
        <Skill>Mobile / Fullstack Developer</Skill>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  background-image: linear-gradient(rgba(18, 19, 20, 0.55) 100%, rgba(110, 108, 108, 0) 0%), url(${MyImage});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  @media (max-width: 766px) {
    padding-top: 45%;
  }
`

const HelloWorld = styled.h4`
  font-family: Avenir-Black;
  font-style: italic;
  color: rgb(255, 255, 255);
  font-size: 24px;
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
export default Welcome

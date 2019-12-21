import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  font-size: 14px;
  font-family: Avenir;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Div = styled.div`
  font-family: Avenir;
  width: 60%;
  @media (max-width: 766px) {
    width: 85%;
    height: 75%;
    font-family: Avenir;
    overflow: scroll;
    overflow-x: hidden;
  }
`

const AboutMe = () => (
  <Wrapper>
    <Helmet>
      <title>Reyansh-About Me</title>
    </Helmet>
    <Div>
      <p>
        Hey, My name is Reyansh Mishra, I am an Android and fullstack deverloper. In my college days, I created an Android App
        called Boom because of which got my firt offer from a startup.
        <br />
        <br />
        <br />
        When I was in final year of my graduation I had PPO from L&T Infotech and Infosys but I chose to work with a Startup
        because learning new skills and development work excites me more than working in an MNC. I am an Android and
        ReactJS/Native enthusiast and have created a couple of open source projects on my GitHub profile.
        <br />
        <br />
        I started learning android when I had to create a project for my graduation and I learned android development from youtube
        and with the help of some blogs and open source projects.
        <br />
        <br />
        <br />
        In my spare time, I either play a video game on my PlayStation 4 or use the internet or read technical blogs. I don’t like
        to study books so I use Quora to gain a little bit of knowledge, sometimes I answer some questions as well.
      </p>
    </Div>
  </Wrapper>
)

export default AboutMe

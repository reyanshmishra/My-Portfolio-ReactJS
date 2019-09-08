import React from 'react'
import styled from 'styled-components'

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
    <Div>
      <p>
        Hey, My name is Reyansh Mishra, I am an Android and iOS Developer, previously I was working with Tacto Infomedia Pvt. Ltd.
        currently, I am freelancing. In my college days, I created an Android App called Boom because of which Ianded a job in my
        first company that is Tacto.
        <br />
        <br />
When I was in final year of my graduation I had PPO from L&T Infotech and Infosys but I chose to work with a
        Startup because learning new skills and development work excites me more than working in an MNC. I am an Android
        enthusiast and have created a couple of open source projects on my GitHub profile.
        <br />
        <br />
When I was in final year of my graduation I had PPO from L&T Infotech and Infosys but I chose to work with a
        Startup because learning new skills and development work excites me more than working in an MNC. I am an Android
        enthusiast and have created a couple of open source projects on my GitHub profile.
        <br />
        <br />
I started learning android when I had to create a project for my graduation and I learned android development from
        youtube and with the help of blogs and open source projects.
        <br />
        <br />
My biggest inspiration is "Mr. Elon Musk" maybe I will get lucky someday and meet him.
        <br />
        <br />
In my spare time, I either play a video game on my PlayStation 4 or use the internet. I don’t like to study books
        so I use Quora to gain a little bit of knowledge, sometimes I write there but not much.
      </p>
    </Div>
  </Wrapper>
)

export default AboutMe

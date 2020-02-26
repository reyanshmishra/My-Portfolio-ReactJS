import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

const Wrapper = styled.div`
  width: 100%;
  font-family: Avenir;
  -webkit-font-smoothing: antialiased;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
`

const SecondWrapper = styled.div`
  flex-direction: column;
  width: 60%;
  display: flex;
  height: 60%;
  @media (max-width: 766px) {
    width: 100%;
    height: 80%;
  }
`
const Row = styled.div`
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
`

const DataIndicator = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  font-family: Avenir-Black;
  -webkit-font-smoothing: antialiased;
  align-items: center;
  justify-content: center;
  @media (max-width: 766px) {
    padding: 8px;
  }
`
const D = styled.div`
  border-radius: 10px;
  color: white;
  background-color: black;
  text-align: center;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  @media (max-width: 766px) {
    width: 70px;
    height: 70px;
    font-size: 10px;
  }
`

const DataDesc = styled.div`
  display: flex;
  flex: 5.5;
  font-size: 14px;
  margin-left: 10px;

  @media (max-width: 1000px) {
    font-size: 12px;
    margin-left: 12px;
  }

  @media (max-width: 766px) {
    font-size: 10px;
  }
`

const Skills = () => (
  <Wrapper>
    <Helmet>
      <title>Reyansh-Skills</title>
    </Helmet>
    <SecondWrapper>
      <Row>
        <DataIndicator>
          <D>Android</D>
        </DataIndicator>
        <DataDesc>
          I have more than two years of experience in android development and I have created several apps for android. I know
          RestApis, threads, several famous libraries like Picasso, Retrofit, Volley, RxAndroid, etc.
        </DataDesc>
      </Row>
      <Row>
        <DataIndicator>
          <D>iOS</D>
        </DataIndicator>
        <DataDesc>
          Since I left my job and started doing freelancing, Since then I have been working on iOS development and have created
          the B2B app for the client. Though I am new have good knowledge of iOS development and MVC in it, I know about
          Alamofire, Realm, Kingfisher libraries in iOS.
        </DataDesc>
      </Row>
      <Row>
        <DataIndicator>
          <D>Design</D>
        </DataIndicator>
        <DataDesc>
          I know a little bit of Sketch, Photoshop, and illustrator. This website is designed by me on Sketch, developed using
          ReactJS and deployed on firebase (Designing is not my area of expertise).
        </DataDesc>
      </Row>
      <Row>
        <DataIndicator>
          <D>
            Web <br />
            Development
          </D>
        </DataIndicator>
        <DataDesc>
          This website proves that I know ReactJS as well, I have created it using ReactJS. I have 1.5 years of experience in
          ReactJS and javascript I have built several websites in ReactJS, along the way I have learned about redux, saga, Immer,
          Immutalbejs and other several other libraries which are basic building blocks of complex ReactJS websites.
        </DataDesc>
      </Row>

      <Row>
        <DataIndicator>
          <D>
            React <br />
            Native
          </D>
        </DataIndicator>
        <DataDesc>
          I have worked on few ReactNative apps as well, as I come from a mobile app developed background ReactNative seems pretty
          easy for me. ReactNative is just similar to ReactJS except for the syntaxes so I don't think it was that hard to learn.
          I am kind of proficient in it.
        </DataDesc>
      </Row>
    </SecondWrapper>
  </Wrapper>
)

export default Skills

import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import MyImage from '../../assets/img/Reyansh.png'
import MyResume from '../../assets/reyansh_mishra.pdf'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
`

const Download = styled.a`
  text-decoration: none;
  font-size: 1.5em;
  margin-top: 10px;
  color: black;
  -webkit-font-smoothing: antialiased;
  font-family: Avenir-Black;
  color: gray;
  &:hover {
    color: black;
    text-decoration: none;
  }
`
const Image = styled.img`
  border-radius: 100px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const Resume = () => (
  <Wrapper>
    <Helmet>
      <title>Reyansh-Resume</title>
    </Helmet>
    <Image src={MyImage} alt="react-boilerplate - Logo" className="animated zoomIn delay-0.2s" />
    <Download target="_blank" href={MyResume} className="animated slideInUp delay-0.3s">
      Download
    </Download>
  </Wrapper>
)

export default Resume

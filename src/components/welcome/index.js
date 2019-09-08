import React, { Component } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

class Welcome extends Component {
  componentDidMount() {
    this.background = ReactDOM.findDOMNode(this);
    // this.background.addEventListener("mousemove", this.handleMouseEvent);
    this.mY = 0;
  }

  handleMouseEvent = event => {
    let centerX = this.background.clientWidth / 2;
    let centerY = this.background.clientHeight / 2;
    var pageX = event.pageX;
    var pageY = event.pageY;
    let dX = (pageX - centerX) / 50;
    let dY = (pageY - centerY) / 50;

    this.background.style.backgroundPositionX = dX + "px";
    this.background.style.backgroundPositionY = dY + "px";
  };

  componentWillUnmount() {
    // this.background.removeEventListener("mousemove", this.handleMouseEvent);
  }
  render() {
    return (
      <Wrapper>
        <HelloWorld>
          Hello World;
          <br />
          <br />
          {"I am"}
        </HelloWorld>
        <Name>
          <b>
            Reyansh
            <br /> Mishra
          </b>
        </Name>
        <br />
        <Skill>Mobile / Web Developer</Skill>
      </Wrapper>
    );
  }
}
export default Welcome

const Wrapper = styled.div`
  background-image: linear-gradient(rgba(18, 19, 20, 0.55) 100%, rgba(110, 108, 108, 0) 0%),
    url("https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80");
  background-size: 100%;
  flex-direction: column;
  justify-content: center;
  background-position: center;
  overflow: hidden;
  background-repeat: no-repeat;
  align-items: center;
  display: flex;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  @media (max-width: 766px) {
    padding-top: 45%;
  }
`;

const HelloWorld = styled.h4`
  font-family: Avenir-Black;
  font-style: italic;
  color: rgb(255, 255, 255);
  font-size: 24px;
  text-align: center;
`;
const Name = styled.h1`
  text-align: center;
  color: rgb(255, 255, 255);
  font-size: 55px;
  font-family: Avenir-Black;
  font-style: italic;
`;

const Skill = styled.h4`
  text-align: center;
  color: rgb(255, 255, 255);
  font-size: 20px;
  font-style: italic;
  font-family: Avenir-Black;
`;

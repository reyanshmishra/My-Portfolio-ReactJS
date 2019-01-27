import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import styled from "styled-components";
import * as Utils from "../utils";
import "./demo_bar.css";

class NavigationBar extends Component {
  navigate = path => () => {
    const { history } = this.props;
    const currentPath = history.location.pathname;
    if (currentPath !== path) {
      history.push(path);
    }
  };

  render() {
    const { pathname } = this.props.location;
    const color = Utils.getNavigationColor(pathname);
    const title = Utils.getBrandName(pathname);
    const selected = (pathname, currentpathname) => pathname === currentpathname;

    return (
      <Navbar
        inverse
        collapseOnSelect
        fixedTop
        className="navbar-default"
        style={{ backgroundColor: color, boxShadow: color !== "transparent" ? "lightgrey 10px 8px 20px" : null }}
      >
        <div className="container-fluid">
          <Navbar.Header>
            <Navbar.Toggle />
            <Navbar.Brand>{title}</Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav className="nav navbar-nav navbar-center">
              <CustomNav isselected={selected(pathname, "/").toString()} onClick={this.navigate("/")}>
                Welcome
              </CustomNav>
              <CustomNav isselected={selected(pathname, "/aboutme").toString()} onClick={this.navigate("/aboutme")}>
                About Me
              </CustomNav>
              <CustomNav isselected={selected(pathname, "/skills").toString()} onClick={this.navigate("/skills")}>
                Skills
              </CustomNav>
              <CustomNav isselected={selected(pathname, "/projects").toString()} onClick={this.navigate("/projects")}>
                Projects
              </CustomNav>
              <CustomNav isselected={selected(pathname, "/resume").toString()} onClick={this.navigate("/resume")}>
                Resume
              </CustomNav>
              {/* <CustomNav isselected={selected(pathname, "/blog").toString()} onClick={this.navigate("/blog")}>
                Blog
              </CustomNav> */}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}

const CustomNav = styled(NavItem)`
  a:before {
    content: "";
    position: absolute;
    width: ${props => (props.isselected === "true" ? `50%` : "0%")};
    height: 3px;
    bottom: 0px;
    left: 25%;
    background: white;
    border-radius: 5px;
    transition: all ease-in-out 200ms;
  }
  a:hover:before {
    width: 50%;
    text-decoration: none;
  }
`;

export default withRouter(NavigationBar);

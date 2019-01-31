import React, { Component } from "react";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";
const routes = [
  {
    path: "/blog/app-1",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: "/blog/app-2",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: "/blog/app-3",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  }
];

class Blog extends Component {
  render() {
    return (
      <Wrapper>
        <SideBarWrapper>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/blog/app-1">Home</Link>
            </li>
            <li>
              <Link to="/blog/app-2">Bubblegum</Link>
            </li>
            <li>
              <Link to="/blog/app-3">Shoelaces</Link>
            </li>
          </ul>
        </SideBarWrapper>
        <div>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} exact={route.exact} component={route.sidebar} />
          ))}
        </div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  margin-top: 80px;
  height: 86%;
  display: flex;
  background-color: red;
`;

const SideBarWrapper = styled.div`
  min-width: 200px;
  background-color: blue;
`;

export default Blog;

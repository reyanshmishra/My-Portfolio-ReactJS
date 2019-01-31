import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Welcome from "./components/welcome";
import AboutMe from "./components/aboutMe";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Resume from "./components/resume";
import Blog from "./components/blog";

import NavBar from "./components/navigationBar";
import Footer from "./components/footer";

const App = () => (
  <BrowserRouter>
    <AppWrapper className="animated fadeIn delay-0.2s">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog/:app" component={Blog} />

        <Redirect to="/" />
      </Switch>
      <Footer />
    </AppWrapper>
  </BrowserRouter>
);

const AppWrapper = styled.div`
  background-size: cover;
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  position: fixed;
  height: 100%;
  background-size: cover;
  flex-direction: column;

  @font-face {
    font-family: "Avenir";
    src: url("./assets/fonts/Avenir-Light.otf") format("opentype");
  }

  @font-face {
    font-family: "Avenir-Black-Oblique";
    src: url("./assets/fonts/Avenir Black Oblique.otf") format("opentype");
  }

  @font-face {
    font-family: "Avenir-Black";
    src: url("./assets/fonts/Avenir Black.otf") format("opentype");
  }
`;

export default App;

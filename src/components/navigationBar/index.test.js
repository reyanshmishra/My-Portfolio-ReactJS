import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

import NavBar from "./index.js";

it("renders correctly when there are no items", () => {
  const tree = renderer
    .create(
      <Router>
        <NavBar />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

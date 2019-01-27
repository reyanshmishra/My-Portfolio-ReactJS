import React from "react";
import renderer from "react-test-renderer";

import Footer from "./index.js";
import { BrowserRouter as Router } from "react-router-dom";

it("renders correctly when there are no items", () => {
  const tree = renderer
    .create(
      <Router>
        <Footer />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

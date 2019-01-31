import React from "react";
import renderer from "react-test-renderer";

import Projects from "./index.js";

it("renders correctly", () => {
  const tree = renderer.create(<Projects />).toJSON();
  expect(tree).toMatchSnapshot();
});

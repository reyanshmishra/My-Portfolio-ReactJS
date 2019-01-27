import React from "react";
import renderer from "react-test-renderer";

import Blog from "./index.js";

it("renders correctly when there are no items", () => {
  const tree = renderer.create(<Blog />).toJSON();
  expect(tree).toMatchSnapshot();
});

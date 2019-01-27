import React from "react";
import renderer from "react-test-renderer";

import Welcome from "./index.js";

it("renders correctly when there are no items", () => {
  const tree = renderer.create(<Welcome />).toJSON();
  expect(tree).toMatchSnapshot();
});

import React from "react";
import renderer from "react-test-renderer";

import Skills from "./index.js";

it("renders correctly when there are no items", () => {
  const tree = renderer.create(<Skills />).toJSON();
  expect(tree).toMatchSnapshot();
});

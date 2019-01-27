import React from "react";
import renderer from "react-test-renderer";

import AboutMe from "./index.js";

it("renders correctly when there are no items", () => {
  const tree = renderer.create(<AboutMe />).toJSON();
  expect(tree).toMatchSnapshot();
});

import React from "react";
import renderer from "react-test-renderer";

import Resume from "./index.js";

it("renders correctly when there are no items", () => {
  const tree = renderer.create(<Resume />).toJSON();
  expect(tree).toMatchSnapshot();
});

import React from "react";
import renderer from "react-test-renderer";
import TabMenu from "../components/tabMenu";

describe("TabMenu", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<TabMenu />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

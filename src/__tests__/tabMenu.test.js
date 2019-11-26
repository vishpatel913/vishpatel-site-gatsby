import React from "react";

import renderWithTheme from "../utils/test-renderer";
import TabMenu from "../components/tabMenu";

describe("TabMenu", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<TabMenu />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

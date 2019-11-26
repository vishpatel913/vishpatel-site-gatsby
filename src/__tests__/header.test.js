import React from "react";
import renderWithTheme from "../utils/test-renderer";
import Header from "../components/header";

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Header />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

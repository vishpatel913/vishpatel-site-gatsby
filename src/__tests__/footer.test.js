import React from "react";
import renderWithTheme from "../utils/test-renderer";
import Footer from "../components/footer";

describe("Footer", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Footer />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

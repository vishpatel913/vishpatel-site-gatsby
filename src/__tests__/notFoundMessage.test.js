import React from "react";
import renderer from "react-test-renderer";
import NotFoundMessage from "../components/notFoundMessage";

describe("NotFoundMessage", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<NotFoundMessage />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

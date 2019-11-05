import React from "react";
import renderer from "react-test-renderer";
import Icon from "../components/icon";

describe("Icon", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Icon className="test" name="instagram" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

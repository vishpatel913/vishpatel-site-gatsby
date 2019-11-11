import React from "react";
import renderer from "react-test-renderer";
import Icon from "../components/icon";

describe("Icon", () => {
  it("renders the instagram icon correctly", () => {
    const tree = renderer
      .create(<Icon name="instagram" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the linkedIn icon correctly", () => {
    const tree = renderer
      .create(<Icon name="linkedIn" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the gitHub icon correctly", () => {
    const tree = renderer
      .create(<Icon name="gitHub" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the mail icon correctly", () => {
    const tree = renderer
      .create(<Icon name="mail" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the category icon correctly", () => {
    const tree = renderer
      .create(<Icon name="category" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the user icon correctly", () => {
    const tree = renderer
      .create(<Icon name="user" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the check icon correctly", () => {
    const tree = renderer
      .create(<Icon name="check" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the icon with the correct class", () => {
    const tree = renderer
      .create(<Icon className="test" name="instagram" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

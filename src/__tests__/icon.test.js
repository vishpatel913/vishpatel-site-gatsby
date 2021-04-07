import React from "react";
import renderWithTheme from "../test/test-renderer";
import Icon from "../components/icon";

describe("Icon", () => {
  it("renders the instagram icon correctly", () => {
    const tree = renderWithTheme(<Icon name="instagram" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the linkedIn icon correctly", () => {
    const tree = renderWithTheme(<Icon name="linkedIn" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the gitHub icon correctly", () => {
    const tree = renderWithTheme(<Icon name="gitHub" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the mail icon correctly", () => {
    const tree = renderWithTheme(<Icon name="mail" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the category icon correctly", () => {
    const tree = renderWithTheme(<Icon name="category" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the user icon correctly", () => {
    const tree = renderWithTheme(<Icon name="user" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the check icon correctly", () => {
    const tree = renderWithTheme(<Icon name="check" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the icon with the correct class", () => {
    const tree = renderWithTheme(
      <Icon className="test" name="instagram" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from "react";
import renderWithTheme from "../test/test-renderer";
import CommentForm from "../components/commentForm";

describe("CommentForm", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<CommentForm slug="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

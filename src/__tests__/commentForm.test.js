import React from "react";
import renderer from "react-test-renderer";
import CommentForm from "../components/commentForm";

describe("CommentForm", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<CommentForm slug="test" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from "react";
import styled from "styled-components";

import colors from "../utils/colors";

const Container = styled.div``;

const FormInput = styled.input`
  background: white;
  border: solid 1px ${colors.grey};
  border-radius: 4px;
  padding: 0.5rem;
  margin-right: 1rem;
  margin-bottom: 1rem;

  &::placeholder {
    font-weight: lighter;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
  }
`;

const FormMessage = styled.textarea`
  display: block;
  width: 100%;
  background: white;
  border: solid 1px ${colors.grey};
  border-radius: 4px;
  padding: 0.5rem;
  margin-right: 1rem;
  margin-bottom: 1rem;

  &::placeholder {
    font-weight: lighter;
  }
`;

const FormButton = styled.button`
  @media (max-width: 768px) {
    margin-left: auto;
  }
`;

const CommentForm = ({ slug }) => (
  <Container>
    <h2>Leave a Comment</h2>
    <form
      method="POST"
      action="https://api.staticman.net/v2/entry/vishpatel913/vishpatel-site-gatsby/master/comments"
    >
      <input name="options[slug]" type="hidden" value={slug} />
      <FormInput name="fields[name]" type="text" placeholder="Name*" required />
      <FormInput name="fields[email]" type="email" placeholder="Email" />
      <FormMessage rows="5" name="fields[message]" placeholder="Message*" required />
      <FormButton type="submit">Submit</FormButton>
    </form>
  </Container>
);

export default CommentForm;
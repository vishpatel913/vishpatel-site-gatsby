import React from "react";
import PropTypes from "prop-types";
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
  width: 40%;
  box-sizing: border-box;

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
  cursor: pointer;
  @media (max-width: 768px) {
    margin-left: auto;
  }
`;

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("event", e)
};

const CommentForm = ({ slug }) => {
  const formId = `${slug}-comments`;
  return (
    <Container>
      <h2>Leave a Comment</h2>
      <form name={formId} method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value={formId} />
        <input type="hidden" name="bot-field" />
        <input name="slug" type="hidden" value={slug} />
        <FormInput name="name" type="text" placeholder="Name*" required />
        <FormInput name="email" type="email" placeholder="Email" />
        <FormMessage name="message" rows="5" placeholder="Message*" required />
        <FormButton type="submit">Submit</FormButton>
      </form>
    </Container>
  );
};

CommentForm.propTypes = {
  slug: PropTypes.string
};

export default CommentForm;

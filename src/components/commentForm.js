import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Icon from "./icon";
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

const FormToast = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 12px;
  max-width: 25em;
  color: white;
  background: ${colors.secondary};
  text-align: center;
  line-height: 0;
  padding: 1em;
  margin: auto;
  transition: all 0.3s ease 0s;
  border-radius: 4px;
  opacity: 0;
`;

const encode = data => Object.keys(data)
  .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
  .join("&");

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = {};

  formData.forEach((value, prop) => {
    data[prop] = value;
  });

  const formBody = encode(data);

  // POST the request to post-comment lambda function
  await fetch(`/.netlify/functions/post-comment?slug=${data.slug}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: formBody
  })
    .then(() => {
      const successToast = document.getElementById("success-toast");
      document.getElementById("comment-form").reset();
      successToast.style.cssText = "opacity: 1;";
      setTimeout(() => {
        successToast.style.cssText = "";
      }, 2000);
    })
    .catch((err) => {
      alert(`Something went wrong: ${err}`);
    });
};

const CommentForm = ({ slug }) => {
  const formId = `${slug}-comments`;
  return (
    <Container>
      <h2>Leave a Comment</h2>
      <form
        disabled
        id="comment-form"
        name={formId}
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
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

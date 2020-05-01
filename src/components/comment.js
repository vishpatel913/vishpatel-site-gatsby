import React from "react";
import styled from "styled-components";
import moment from "moment";

import { capitalizeString } from "../utils";

const CommentContainer = styled.li`
  display: block;
  margin-bottom: 1.5rem;
`;

const CommentHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const CommentTitle = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 4px solid ${({ theme }) => theme.color.primary};
  padding-left: 1em;
`;

const CommentMessage = styled.div`
  display: block;
`;

const Comment = ({ author, time, message }) => {
  const date = moment(time * 1000).format("D MMM 'YY");

  return (
    <CommentContainer>
      <CommentHeader>
        <CommentTitle>
          <strong>{capitalizeString(author)}</strong>
          {date}
        </CommentTitle>
      </CommentHeader>
      <CommentMessage>{message}</CommentMessage>
    </CommentContainer>
  );
};

export default Comment;

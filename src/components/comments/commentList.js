import React from "react";
import styled from "styled-components";

import { Comment } from ".";

const CommentListContainer = styled.div`
  display: block;
  margin: 0;
  margin-bottom: 2rem;
`;

const ListContainer = styled.ul`
  margin: 0;
`;

const CommentList = ({ data }) => (
  <CommentListContainer>
    <h2>
      {`${data.length} `}
      Comment
      {data.length !== 1 && "s"}
    </h2>
    <ListContainer>
      {data.map(({ node }) => (
        <Comment
          key={node.timestamp}
          author={node.name}
          time={node.timestamp}
          message={node.message.message}
        />
      ))}
    </ListContainer>
  </CommentListContainer>
);

export default CommentList;

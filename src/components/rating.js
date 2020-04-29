import React from "react";
import styled from "styled-components";
import Icon from "./icon";

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RatingItem = styled(Icon)`
  font-size: inherit;
  color: ${({ theme, on }) => theme.color[on ? "primary" : "grey"]};
`;

const Number = styled.span`
  font-size: inherit;
  color: ${({ theme }) => theme.color.primary};
`;

const Rating = ({ value, max = 5, showAll = true, icon = "star" }) => (
  <RatingContainer>
    {showAll ? (
      Array.from(Array(max)).map((e, i) => (
        <RatingItem name={icon} on={value > i} />
      ))
    ) : (
      <>
        <RatingItem name={icon} on={value > i} />
        <Number>{value}</Number>
      </>
    )}
  </RatingContainer>
);

export default Rating;

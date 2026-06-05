import React from "react";
import styled from "styled-components";
import Icon from "./icon";

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RatingItem = styled(Icon)<{ $active?: boolean }>`
  font-size: inherit;
  color: ${({ theme, $active }) => theme.color[$active ? "primary" : "grey"]};
`;

const Label = styled.span`
  font-size: inherit;
  color: ${({ theme }) => theme.color.primary};
`;

type Props = {
  value: number;
  max?: number;
  showAll?: boolean;
  icon?: string;
};

const Rating = ({ value, max = 5, showAll = true, icon = "star" }: Props) => (
  <RatingContainer>
    {showAll ? (
      Array.from(Array(max)).map((_, i) => (
        <RatingItem name={icon} $active={value > i} />
      ))
    ) : (
      <>
        <RatingItem name={icon} $active />
        <Label>{value}</Label>
      </>
    )}
  </RatingContainer>
);

export default Rating;

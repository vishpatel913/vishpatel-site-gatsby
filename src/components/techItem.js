import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

import { Rating } from ".";
import { editTracedSvg } from "../utils";
import { useDarkMode } from "../context/darkMode";

const TechContainer = styled.li`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 1rem;
  position: relative;
  margin: 1rem 0;

  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    flex-direction: column;
    max-height: 100%;
    grid-template-columns: 1fr;
    align-items: end;
  }
`;

const TechLogo = styled.div`
  height: 100%;

  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    width: 100%;
    padding: 0;
  }
`;

const TechDetails = styled.div``;

const TechName = styled.strong`
  display: block;
  text-align: left;
  font-size: 20px;

  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    font-size: 16px;
  }
`;

const RatingContainer = styled.div`
  display: inline-block;
  font-size: 12px;
`;

const TechItem = ({ node }) => {
  const { name, logo, competence } = node;
  const { isDarkMode } = useDarkMode();

  return (
    <TechContainer>
      <TechLogo>
        <Img
          fluid={editTracedSvg(logo.fluid, isDarkMode)}
          title={name}
          alt={`Logo for ${name}`}
          imgStyle={{ filter: isDarkMode && "brightness(120%) sepia(10%)" }}
        />
      </TechLogo>
      <TechDetails>
        <TechName>{name}</TechName>
        {competence && (
          <RatingContainer>
            <Rating value={competence} icon="fire" />
          </RatingContainer>
        )}
      </TechDetails>
    </TechContainer>
  );
};

export default TechItem;

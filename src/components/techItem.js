import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

import { Rating } from ".";
import { getImageWithTracedSVG } from "../utils";
import { useDarkMode } from "../context/darkMode";

const TechContainer = styled.li`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 1rem;
  position: relative;

  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    flex-direction: column;
    max-height: 100%;
    grid-template-columns: 1fr;
    align-items: end;
  }
`;

const TechLogo = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    justify-content: flex-end;
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
        <GatsbyImage
          image={getImageWithTracedSVG(logo, isDarkMode)}
          title={name}
          alt={`Logo for ${name}`}
          imgStyle={{
            filter: isDarkMode && "brightness(120%) sepia(10%)"
          }}
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

import React from "react";
import { GatsbyImage, ImageDataLike } from "gatsby-plugin-image";

import { Rating } from "../common";
import { getImageData } from "../../utils";
import { useDarkMode } from "../../context/darkMode";
import {
  RatingContainer,
  TechContainer,
  TechDetails,
  TechLogo,
  TechName
} from "./TechItem.styles";

type Props = {
  name?: string;
  logo?: ImageDataLike;
  competence?: number;
};

const TechItem = ({ name, logo, competence }: Props) => {
  const { isDarkMode } = useDarkMode();
  const logoData = logo && getImageData(logo);

  return (
    <TechContainer>
      {logoData ? (
        <TechLogo>
          <GatsbyImage
            image={logoData}
            title={name}
            alt={`Logo for ${name}`}
            imgStyle={{
              filter: isDarkMode ? "brightness(120%) sepia(10%)" : undefined
            }}
          />
        </TechLogo>
      ) : null}
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

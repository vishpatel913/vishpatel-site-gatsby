import React from "react";
import { Link } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { getAltText, getImageData } from "../../utils";
import { useDarkMode } from "../../context/darkMode";
import { ImageContainer, ImagePost } from "./ImageGrid.styles";

type Props = {
  title?: string;
  slug?: string;
  photo?: IGatsbyImageData;
  category?: string;
};

const ImageGridItem = ({ title, slug, photo, category }: Props) => {
  const { isDarkMode } = useDarkMode();
  const imageData = photo && getImageData(photo);

  if (!imageData) return null;

  return (
    <ImageContainer>
      <Link to={`/${slug}`}>
        <ImagePost
          image={imageData}
          title={title}
          alt={getAltText(title, category)}
          $hoverText={title}
          imgStyle={{
            filter: isDarkMode ? "brightness(80%) sepia(10%)" : undefined
          }}
        />
      </Link>
    </ImageContainer>
  );
};

export default ImageGridItem;

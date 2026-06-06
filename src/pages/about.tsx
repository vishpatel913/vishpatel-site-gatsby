import React from "react";
import styled from "styled-components";
import { graphql, PageProps } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { getImageData } from "../utils";
import { useDarkMode } from "../context/darkMode";
import { IconLink, Link } from "../components/common";
import { Container, Layout } from "../components/layout";
import { MarkdownRenderer } from "../components/markdownRenderer";

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto;

  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ImageContainer = styled.div`
  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    height: 20rem;
    overflow: hidden;
  }
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
`;

const AboutPage = ({ data, location }: PageProps<Queries.AboutPageQuery>) => {
  const { isDarkMode } = useDarkMode();
  const {
    name,
    tagLine,
    emailAddress,
    twitterHandle,
    gitHubAccount,
    linkedInProfile,
    profilePhoto,
    biography
  } = data.contentfulAuthor ?? {};
  const profileImage = profilePhoto && getImageData(profilePhoto);

  return (
    <Layout white page={location.pathname}>
      <HeaderContainer>
        {profileImage ? (
          <ImageContainer>
            <GatsbyImage
              image={profileImage}
              title={name ?? "Profile"}
              alt={`Profile picture for ${name}`}
              imgStyle={{
                verticalAlign: "middle",
                filter: isDarkMode ? "brightness(80%) sepia(10%)" : "none"
              }}
            />
          </ImageContainer>
        ) : null}
        <Container>
          <h1>{name}</h1>
          <p>{tagLine}</p>
          <ColumnContainer>
            <Link href={`mailto:${emailAddress}`} icon="mail">
              {emailAddress}
            </Link>
            <RowContainer>
              <IconLink icon="gitHub" href={gitHubAccount ?? ""}>
                GitHub
              </IconLink>
              <IconLink
                icon="instagram"
                href={`http://instagram.com/${twitterHandle}`}
              >
                Instagram
              </IconLink>
              <IconLink icon="linkedIn" href={linkedInProfile ?? ""}>
                LinkedIn
              </IconLink>
            </RowContainer>
          </ColumnContainer>
        </Container>
      </HeaderContainer>
      <Container content>
        <MarkdownRenderer
          source={biography?.childMarkdownRemark?.rawMarkdownBody ?? undefined}
        />
      </Container>
    </Layout>
  );
};

export default AboutPage;

export const query = graphql`
  query AboutPage {
    contentfulAuthor(name: { eq: "Vish Patel" }) {
      name
      tagLine
      emailAddress
      twitterHandle
      gitHubAccount
      linkedInProfile
      profilePhoto {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
      biography {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
    }
  }
`;

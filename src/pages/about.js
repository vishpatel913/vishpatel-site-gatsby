import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import { Layout, Container, MarkdownRenderer, Icon } from "../components";
import { capitalizeString, editTracedSvg } from "../utils";
import { withDarkMode } from "../context/darkMode";

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

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const SocialLink = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border: solid ${({ theme }) => theme.color.grey} 1px;
  font-size: 12px;
  font-weight: 200;
  border-radius: 4px;
  margin-right: 1rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.color.greyDark};

  &:hover {
    color: ${({ theme }) => theme.color.primary};
    border-color: ${({ theme }) => theme.color.primary};
  }
`;

const EmailLink = styled.a`
  display: inline-flex;
  align-items: center;
  font-weight: 200;
  margin-left: 1px;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.color.greyDark};

  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;

const Social = ({ title, link }) => (
  <SocialLink href={link} rel="noopener noreferrer" target="_blank">
    <Icon name={title} />
    {capitalizeString(title)}
  </SocialLink>
);

const AboutPage = ({ data, location, isDarkMode }) => {
  const {
    name,
    tagLine,
    emailAddress,
    twitterHandle,
    gitHubAccount,
    linkedInProfile,
    profilePhoto,
    biography
  } = data.contentfulAuthor;

  return (
    <Layout white page={location.pathname}>
      <>
        <HeaderContainer>
          <ImageContainer>
            <Img
              fluid={editTracedSvg(profilePhoto.fluid, isDarkMode)}
              title={name}
              alt={`Profile picture for ${name}`}
              imgStyle={{
                verticalAlign: "middle",
                filter: isDarkMode ? "brightness(80%) sepia(10%)" : "none"
              }}
            />
          </ImageContainer>
          <Container>
            <h1>{name}</h1>
            <p>{tagLine}</p>
            <EmailLink href={`mailto:${emailAddress}`}>
              <Icon name="mail" />
              {emailAddress}
            </EmailLink>
            <SocialContainer>
              <Social title="gitHub" link={gitHubAccount} />
              <Social
                title="instagram"
                link={`http://instagram.com/${twitterHandle}`}
              />
              <Social title="linkedIn" link={linkedInProfile} />
            </SocialContainer>
          </Container>
        </HeaderContainer>
        <Container content>
          <MarkdownRenderer
            source={biography.childMarkdownRemark.rawMarkdownBody}
          />
        </Container>
      </>
    </Layout>
  );
};

export default withDarkMode(AboutPage);

export const query = graphql`
  {
    contentfulAuthor(name: { eq: "Vish Patel" }) {
      name
      tagLine
      emailAddress
      twitterHandle
      gitHubAccount
      linkedInProfile
      profilePhoto {
        fluid(maxWidth: 800) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      biography {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
    }
  }
`;

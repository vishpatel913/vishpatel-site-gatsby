import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import MarkdownRenderer from "../components/markdownRenderer";
import Icon from "../components/icon";
import { capitalizeString, editTracedSvg } from "../utils/helpers";

const PageContainer = styled.div`
  background: ${({ theme }) => theme.color.white};
  margin: 0.5rem;

  @media (max-width: 768px) {
    margin: 0;
    padding: 0;
  }
`;

const FlexContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`;

const ImageContainer = styled.div`
  @media (min-width: 768px) {
    flex: 1;
  }
  @media (max-width: 768px) {
    height: 20rem;
    overflow: hidden;
  }
`;

const MetaContainer = styled.div`
  @media (min-width: 768px) {
    flex: 2;
    padding: 1.5rem;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 2rem;
  }
`;

const ContentContainer = styled.div`
  padding: 2rem;
  max-width: 80%;
  margin: auto;

  @media (max-width: 768px) {
    max-width: 100%;
    padding-top: 0;
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
    background: ${({ theme }) => theme.color.background};
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

Social.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string
};

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
    <Layout page={location.pathname}>
      <PageContainer>
        <FlexContainer>
          <ImageContainer>
            <Img
              fluid={editTracedSvg(profilePhoto.fluid)}
              title={name}
              alt={`Profile picture for ${name}`}
              imgStyle={{
                verticalAlign: "middle",
                filter: isDarkMode ? "brightness(80%) sepia(10%)" : "none"
              }}
            />
          </ImageContainer>
          <MetaContainer>
            <h1>{name}</h1>
            <p>{tagLine}</p>
            <EmailLink href={`mailto:${emailAddress}`}>
              <Icon name="mail" />
              {emailAddress}
            </EmailLink>
            <SocialContainer>
              <Social title="gitHub" link={gitHubAccount} />
              <Social title="instagram" link={`http://instagram.com/${twitterHandle}`} />
              <Social title="linkedIn" link={linkedInProfile} />
            </SocialContainer>
          </MetaContainer>
        </FlexContainer>
        <ContentContainer>
          <MarkdownRenderer source={biography.childMarkdownRemark.rawMarkdownBody} />
        </ContentContainer>
      </PageContainer>
    </Layout>
  );
};

AboutPage.propTypes = {
  isDarkMode: PropTypes.bool
};

const mapStateToProps = ({ isDarkMode }) => ({ isDarkMode });

export default connect(mapStateToProps, null)(AboutPage);

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

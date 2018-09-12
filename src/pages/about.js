import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Icon from '../components/icon'
import { capitalizeString, editTracedSvg } from '../utils/helpers'
import colors from '../utils/colors'

const PageContainer = styled.div`
  background: white;
  margin: 0.5rem;

  @media (max-width: 768px) {
    margin: 0;
    padding: 0;
  }
`

const FlexContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`

const ImageContainer = styled.div`
  @media (min-width: 768px) {
    flex: 1;
  }
  @media (max-width: 768px) {
    height: 15rem;
    overflow: hidden;
  }
`

const MetaContainer = styled.div`
  @media (min-width: 768px) {
    flex: 2;
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 2rem;
  }
`

const ContentContainer = styled.div`
  padding: 2rem;
  max-width: 85%;
  margin: auto;

  @media (max-width: 768px) {
    max-width: 100%;
    padding-top: 0;
  }
`

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const SocialLink = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border: solid ${colors.grey} 1px;
  font-size: 12px;
  font-weight: 200;
  border-radius: 4px;
  margin-right: 1rem;
  margin-bottom: 1rem;
  color: grey;

  &:hover {
    color: ${colors.primary};
    background: ${colors.background};
  }
`

const SocialIcon = styled(Icon)`
  margin-right: 4px;
  font-size: 20px;
`

const EmailLink = styled.a`
  display: flex;
  align-items: center;
  font-weight: 200;
  margin-left: 4px;
  margin-bottom: 1rem;
  color: grey;

  &:hover {
    color: ${colors.primary};
  }
`

const Social = ({ title, link }) => {
  return (
    <SocialLink href={link} target="_blank">
      <SocialIcon name={title} />
      {capitalizeString(title)}
    </SocialLink>
  )
}

const AboutPage = ({ data }) => {
  const {
    name,
    tagLine,
    emailAddress,
    twitterHandle,
    gitHubAccount,
    linkedInProfile,
    profilePhoto,
    biography,
  } = data.contentfulAuthor

  return (
    <PageContainer>
      <FlexContainer>
        <ImageContainer>
          <Img
            sizes={editTracedSvg(profilePhoto.sizes)}
            title={name}
            alt={'Profile picture for ' + name}
            imgStyle={{ verticalAlign: 'middle' }}
          />
        </ImageContainer>
        <MetaContainer>
          <h1>{name}</h1>
          <p>{tagLine}</p>
          <EmailLink href={'mailto:' + emailAddress}>
            <SocialIcon name="mail" />
            {emailAddress}
          </EmailLink>
          <SocialContainer>
            <Social title="gitHub" link={gitHubAccount} />
            <Social title="linkedIn" link={linkedInProfile} />
            <Social
              title="instagram"
              link={'http://instagram.com/' + twitterHandle}
            />
          </SocialContainer>
        </MetaContainer>
      </FlexContainer>
      <ContentContainer>
        <div
          dangerouslySetInnerHTML={{
            __html: biography.childMarkdownRemark.html,
          }}
        />
        <Link to="/">Go back to the homepage</Link>
      </ContentContainer>
    </PageContainer>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query authorPostQuery {
    contentfulAuthor(name: { eq: "Vish Patel" }) {
      name
      tagLine
      emailAddress
      twitterHandle
      gitHubAccount
      linkedInProfile
      profilePhoto {
        sizes(maxWidth: 800) {
          ...GatsbyContentfulSizes_tracedSVG
        }
      }
      biography {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

import React, { Component } from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { capitalizeString, getAltText, editTracedSvg } from '../utils/helpers'

import colors from '../utils/colors'

const PostContainer = styled.div`
  width: 100%;
  background: white;
  @media (min-width: 992px) {
    display: flex;
  }
`

const ImageContainer = styled.div`
  @media (min-width: 992px) {
    width: 70%;
  }
`

const ContentContainer = styled.div`
  @media (min-width: 992px) {
    max-width: 30%;
    padding: 1.5rem;
  }
  @media (max-width: 992px) {
    padding: 2rem;
    max-width: 85%;
    margin: auto;
  }
  @media (max-width: 768px) {
    max-width: 100%;
  }
`

const PostImage = styled(Img)`
  width: 100%;
  margin: 0;
`

const ImageTitle = styled.h1``

const ImageCaption = styled.p``

const ImageMetaContainer = styled.div`
  color: grey;

  &:before {
    content: '';
    display: block;
    width: 48px;
    height: 2px;
    background: #ddd;
    margin-bottom: 1rem;
  }
`

const DateText = styled.span`
  display: block;
  margin-bottom: 4px;
`

const CategoryLink = styled(Link)`
  display: block;
  margin-bottom: 4px;
  text-decoration: none;
  color: grey;

  &:hover {
    color: ${colors.primary};
  }
`

const TagLink = styled.span`
  display: inline-block;
  text-decoration: none;
  color: grey;
  margin-right: 8px;

  &:hover {
    color: ${colors.primary};
  }
`

const Category = ({ title }) => {
  const text = title.slice(0, 1).toUpperCase() + title.slice(1)
  return <CategoryLink to={'work/' + title}>{text}</CategoryLink>
}

const Tag = ({ title }) => {
  let tagSlug = title
    .toLowerCase()
    .split(' ')
    .join('-')
  return <TagLink to={'tag/' + tagSlug}>#{title}</TagLink>
}

const ImageTemplate = ({ data }) => {
  const {
    title,
    photo,
    imageCaption,
    dateCreated,
    category,
    tags,
  } = data.contentfulImage

  const metaDescription = imageCaption ? imageCaption.imageCaption : category

  return (
    <PostContainer>
      <Helmet
        title={title}
        meta={[
          {
            name: 'description',
            content: metaDescription,
          },
          { name: 'keywords', content: tags },
        ]}
      />
      <ImageContainer>
        <PostImage
          sizes={editTracedSvg(photo.sizes)}
          title={title}
          alt={getAltText(title, category)}
        />
      </ImageContainer>
      <ContentContainer>
        <h1>{title}</h1>
        {imageCaption && (
          <div
            dangerouslySetInnerHTML={{
              __html: imageCaption.childMarkdownRemark.html,
            }}
          />
        )}
        <ImageMetaContainer>
          <DateText>{dateCreated}</DateText>
          <CategoryLink to={'work/' + title}>
            {capitalizeString(category)}
          </CategoryLink>
        </ImageMetaContainer>
        {tags.sort().map(tag => <Tag key={tag} title={tag} />)}
      </ContentContainer>
    </PostContainer>
  )
}

export default ImageTemplate

export const pageQuery = graphql`
  query imagePostQuery($slug: String!) {
    contentfulImage(slug: { eq: $slug }) {
      title
      slug
      photo {
        sizes(maxWidth: 900) {
          ...GatsbyContentfulSizes_tracedSVG
        }
      }
      imageCaption {
        imageCaption
        childMarkdownRemark {
          html
        }
      }
      dateCreated(formatString: "Do MMMM YYYY")
      category
      tags
    }
  }
`

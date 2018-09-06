import React, { Component } from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PostContainer = styled.div`
  width: 100%;
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
    padding-left: 1.5rem;
  }
  @media (max-width: 992px) {
    padding: 1.5rem;
    max-width: 85%;
    margin: auto;
  }
  @media (max-width: 768px) {
    max-width: 100%;
  }
`

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
        <img src={photo.file.url} />
      </ImageContainer>
      <ContentContainer>
        <h1>{title}</h1>
        <p>{metaDescription}</p>
        <p>{dateCreated}</p>
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
        file {
          url
        }
      }
      imageCaption {
        imageCaption
      }
      dateCreated(formatString: "Do MMMM YYYY")
      category
      tags
    }
  }
`

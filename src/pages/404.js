import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const PageContainer = styled.div`
  margin: 0.5rem;

  @media (max-width: 768px) {
    margin: 0 1rem;
    padding-top: 1rem;
  }
`

const NotFoundPage = () => (
  <PageContainer>
    <h1>NOT FOUND</h1>
    <p>You just found a page that doesn&#39;t exist... oh the sadness.</p>
  </PageContainer>
)

export default NotFoundPage

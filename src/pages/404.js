import React from 'react'
import styled from 'styled-components'

const PageContainer = styled.div`
  margin: auto;

  @media (max-width: 768px) {
    margin: 0 1rem;
    padding-top: 1rem;
  }
`

const NotFoundPage = () => (
  <PageContainer>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </PageContainer>
)

export default NotFoundPage

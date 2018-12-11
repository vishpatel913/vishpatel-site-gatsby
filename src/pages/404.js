import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import NotFoundMessage from '../components/not-found-message'

const PageContainer = styled.div`
  margin: 0.5rem;

  @media (max-width: 768px) {
    margin: 0 1rem;
    padding-top: 1rem;
  }
`

const PageNotFound = () => (
  <Layout page="404">
    <PageContainer>
      <NotFoundMessage />
    </PageContainer>
  </Layout>
)

export default PageNotFound

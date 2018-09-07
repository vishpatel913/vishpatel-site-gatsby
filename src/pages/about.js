import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const PageContainer = styled.div`
  margin: auto;

  @media (max-width: 768px) {
    margin: 0 1rem;
    padding-top: 1rem;
  }
`

const SecondPage = () => (
  <PageContainer>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </PageContainer>
)

export default SecondPage

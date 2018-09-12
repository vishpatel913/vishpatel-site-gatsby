import React from 'react'
import styled from 'styled-components'

import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'

const IconContainer = styled.span`
  display: inherit;
`

const Icon = ({ className, name }) => {
  let icon
  switch (name) {
    case 'instagram':
      icon = <FaInstagram />
      break
    case 'linkedIn':
      icon = <FaLinkedin />
      break
    case 'gitHub':
      icon = <FaGithub />
      break
    case 'mail':
      icon = <FaEnvelope />
      break
    default:
  }
  return <IconContainer className={className}>{icon}</IconContainer>
}

export default Icon

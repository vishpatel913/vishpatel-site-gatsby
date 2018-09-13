import React from 'react'
import styled from 'styled-components'

import { FaInstagram } from 'react-icons/lib/fa'
import { FaLinkedinSquare } from 'react-icons/lib/fa'
import { FaGithub } from 'react-icons/lib/fa'
import { FaEnvelopeO } from 'react-icons/lib/fa'
import { FaFolderO } from 'react-icons/lib/fa'

const IconContainer = styled.span`
  display: inherit;
  font-size: 18px;
  margin-right: 4px;
`

const Icon = ({ className, name }) => {
  let icon
  switch (name) {
    case 'instagram':
      icon = <FaInstagram />
      break
    case 'linkedIn':
      icon = <FaLinkedinSquare />
      break
    case 'gitHub':
      icon = <FaGithub />
      break
    case 'mail':
      icon = <FaEnvelopeO />
      break
    case 'category':
      icon = <FaFolderO />
      break
    default:
  }
  return <IconContainer className={className}>{icon}</IconContainer>
}

export default Icon

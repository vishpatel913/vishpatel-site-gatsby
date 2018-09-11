import React from 'react'
import styled from 'styled-components'

import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const IconContainer = styled.span`
  display: inherit;
  ${({ margin }) =>
    margin &&
    `
    margin-right: 4px;
  `};
  ${({ size }) =>
    size &&
    `
    font-size: ${size}px;
  `};
`

const Icon = ({ margin, name, size }) => {
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
    default:
  }
  return (
    <IconContainer margin={margin} size={size}>
      {icon}
    </IconContainer>
  )
}

export default Icon

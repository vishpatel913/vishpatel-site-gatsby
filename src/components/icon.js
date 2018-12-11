import React from 'react'
import styled from 'styled-components'

import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTelegramPlane,
  FaFolderOpen,
  FaUser,
} from 'react-icons/fa'

const IconContainer = styled.span`
  display: inherit;
  font-size: 18px;
  margin-right: 4px;
  vertical-align: middle;
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
      icon = <FaTelegramPlane />
      break
    case 'category':
      icon = <FaFolderOpen />
      break
    case 'user':
      icon = <FaUser />
      break
    default:
  }
  return <IconContainer className={className}>{icon}</IconContainer>
}

export default Icon

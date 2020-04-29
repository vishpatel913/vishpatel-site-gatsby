import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTelegramPlane,
  FaFolderOpen,
  FaUser,
  FaCheckCircle,
  FaSun,
  FaMoon,
  FaFileDownload,
  FaFire,
  FaStar
} from "react-icons/fa";

const IconContainer = styled.span`
  display: inherit;
  font-size: 18px;
  margin: 0 4px;
  vertical-align: text-top;
`;

const Icon = ({ className, name }) => {
  let icon;
  switch (name) {
    case "instagram":
      icon = <FaInstagram />;
      break;
    case "linkedIn":
      icon = <FaLinkedin />;
      break;
    case "gitHub":
      icon = <FaGithub />;
      break;
    case "mail":
      icon = <FaTelegramPlane />;
      break;
    case "category":
      icon = <FaFolderOpen />;
      break;
    case "user":
      icon = <FaUser />;
      break;
    case "check":
      icon = <FaCheckCircle />;
      break;
    case "sun":
      icon = <FaSun />;
      break;
    case "moon":
      icon = <FaMoon />;
      break;
    case "file-download":
      icon = <FaFileDownload />;
      break;
    case "fire":
      icon = <FaFire />;
      break;
    case "star":
      icon = <FaStar />;
      break;
    default:
  }
  return <IconContainer className={className}>{icon}</IconContainer>;
};

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string
};

export default Icon;

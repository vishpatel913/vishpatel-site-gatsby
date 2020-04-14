import React, { useContext } from "react";
import styled from "styled-components";

import Icon from "./icon";
import DarkModeContext from "../context/darkModeContext";

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.color.primary};
  cursor: pointer;
  display: flex;
  outline: none;
  text-align: center;
  vertical-align: middle;
`;

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
  <ToggleButton
    onClick={() => {
      toggleDarkMode();
    }}
  >
    <Icon name={isDarkMode ? "moon" : "sun"} />
  </ToggleButton>
  );
};

export default DarkModeToggle;

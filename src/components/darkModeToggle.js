import React from "react";
import styled from "styled-components";

import { Icon } from ".";
import { useDarkMode } from "../context/darkMode";

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
  const { isDarkMode, toggleDarkMode } = useDarkMode();
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

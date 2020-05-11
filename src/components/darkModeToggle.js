import React from "react";
import styled from "styled-components";

import Icon from "./icon";
import SunMoon from "../assets/svgs/sun-moon.inline.svg";
import { useDarkMode } from "../context/darkMode";

const ToggleButton = styled.button`
  background: ${({ dark, theme }) =>
    dark ? "#ffffff1b" : theme.color.secondaryLight};
  border: none;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  padding: 4px;
  width: 60px;
  line-height: 0;
  position: relative;
`;
const SvgComponent = styled(SunMoon)`
  position: relative;
  height: 20px;
  width: 20px;
  transition: all 0.25s;
  ${({ dark }) => (dark ? "margin-right" : "margin-left")}: 30px;
  circle {
    transition: all 0.25s;
    transform-origin: center;
  }
  #main {
    transform: scale(${({ dark }) => (dark ? 1.4 : 1)});
    ${({ dark }) => dark && "fill: #f1f6fc"}
  }
  #sun-ray {
    transform: scale(${({ dark }) => (dark ? 0 : 1)});
    opacity: ${({ dark }) => (dark ? 0 : 1)};
  }
  #moon-hole {
    transform: scale(${({ dark }) => (dark ? 1 : 0)});
  }
`;
const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;
const StarIcon = styled.span`
  position: absolute;
  top: ${({ x }) => (x % 2 === 0 ? 8 + x : 20 - x)}px;
  left: ${({ x }) => x * 6 + 28}px;
  height: ${({ x }) => (x === 2 ? 1 : 2)}px;
  width: ${({ x }) => (x === 2 ? 1 : 2)}px;
  border-radius: 20px;
  background-color: white;
`;
const CloudIcon = styled(Icon)`
  position: absolute;
  top: ${({ x }) => (x % 2 === 0 ? 6 + x : 14 - x)}px;
  right: ${({ x }) => x * 8 + 28}px;
  font-size: ${({ x }) => x + 8}px;
  color: white;
`;

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ToggleButton
      dark={isDarkMode}
      onClick={() => {
        toggleDarkMode();
      }}
    >
      <SvgComponent dark={isDarkMode} />
      <Background>
        {Array.from({ length: isDarkMode ? 4 : 2 }).map((item, index) =>
          isDarkMode ? (
            <StarIcon x={index} />
          ) : (
            <CloudIcon x={index} name="cloud" />
          )
        )}
      </Background>
    </ToggleButton>
  );
};

export default DarkModeToggle;

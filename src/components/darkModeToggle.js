import React from "react";
import styled from "styled-components";

import Icon from "./icon";
import SunMoon from "../assets/svgs/sun-moon.inline.svg";
import { useDarkMode } from "../context/darkMode";

const ToggleButton = styled.button`
  background: ${({ dark }) => (dark ? "#ffffff1b" : "#7ddddf")};
  border: none;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  padding: 4px;
  width: 60px;
  line-height: 0;
  position: relative;
`;
const SunMoonSVG = styled(SunMoon)`
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
    fill: ${({ dark }) => (dark ? "#f1f6fc" : "#fcf8f1")};
  }
  #sun-ray-mask {
    opacity: ${({ dark }) => (dark ? 0 : 1)};
  }
  #sun-main-mask {
    transform: scale(${({ dark }) => (dark ? 1.4 : 1)});
  }
  #moon-hole-mask {
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
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  border-radius: 20px;
  background-color: white;
`;
const CloudIcon = styled(Icon)`
  position: absolute;
  top: ${({ y }) => y}px;
  right: ${({ x }) => x}px;
  font-size: ${({ size }) => size}px;
  color: white;
`;

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ToggleButton dark={isDarkMode} onClick={toggleDarkMode}>
      <SunMoonSVG dark={isDarkMode} />
      <Background>
        {isDarkMode ? (
          <>
            <StarIcon x={28} y={8} size={2} />
            <StarIcon x={34} y={18} size={2} />
            <StarIcon x={40} y={10} size={1} />
            <StarIcon x={46} y={16} size={2} />
          </>
        ) : (
          <>
            <CloudIcon name="cloud" x={26} y={6} size={8} />
            <CloudIcon name="cloud" x={36} y={12} size={10} />
          </>
        )}
      </Background>
    </ToggleButton>
  );
};

export default DarkModeToggle;

import React from "react";
import { useDarkMode } from "../../context/darkMode";
import {
  Background,
  CloudIcon,
  StarIcon,
  SunMoonSVG,
  ToggleButton
} from "./Toggle.styles";

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ToggleButton $dark={isDarkMode} onClick={toggleDarkMode}>
      <SunMoonSVG $dark={isDarkMode} />
      <Background>
        {isDarkMode ? (
          <>
            <StarIcon $x={28} $y={8} $size={2} />
            <StarIcon $x={34} $y={18} $size={2} />
            <StarIcon $x={40} $y={10} $size={1} />
            <StarIcon $x={46} $y={16} $size={2} />
          </>
        ) : (
          <>
            <CloudIcon name="cloud" $x={26} $y={6} $size={8} />
            <CloudIcon name="cloud" $x={36} $y={12} $size={10} />
          </>
        )}
      </Background>
    </ToggleButton>
  );
};

export default DarkModeToggle;

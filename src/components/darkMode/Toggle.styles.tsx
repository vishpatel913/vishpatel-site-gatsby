import styled from "styled-components";

import { Icon } from "../common";
import SunMoon from "../../assets/svgs/sun-moon.inline.svg";

export const ToggleButton = styled.button<{ $dark?: boolean }>`
  background: ${({ $dark }) => ($dark ? "#ffffff1b" : "#7ddddf")};
  border: none;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  padding: 4px;
  width: 60px;
  line-height: 0;
  position: relative;
`;

export const SunMoonSVG = styled(SunMoon)<{ $dark?: boolean }>`
  position: relative;
  height: 20px;
  width: 20px;
  transition: all 0.25s;
  ${({ $dark }) => ($dark ? "margin-right" : "margin-left")}: 30px;
  circle {
    transition: all 0.25s;
    transform-origin: center;
  }
  #main {
    fill: ${({ $dark }) => ($dark ? "#f1f6fc" : "#fcf8f1")};
  }
  #sun-ray-mask {
    opacity: ${({ $dark }) => ($dark ? 0 : 1)};
  }
  #sun-main-mask {
    transform: scale(${({ $dark }) => ($dark ? 1.4 : 1)});
  }
  #moon-hole-mask {
    transform: scale(${({ $dark }) => ($dark ? 1 : 0)});
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

export const StarIcon = styled.span<{ $x: number; $y: number; $size: number }>`
  position: absolute;
  top: ${({ $y }) => $y}px;
  left: ${({ $x }) => $x}px;
  height: ${({ $size }) => $size}px;
  width: ${({ $size }) => $size}px;
  border-radius: 20px;
  background-color: white;
`;

export const CloudIcon = styled(Icon)<{
  $x: number;
  $y: number;
  $size: number;
}>`
  position: absolute;
  top: ${({ $y }) => $y}px;
  right: ${({ $x }) => $x}px;
  font-size: ${({ $size }) => $size}px;
  color: white;
`;

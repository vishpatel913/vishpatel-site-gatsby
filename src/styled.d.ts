import "styled-components";

type Breakpoints = {
  lg: string;
  md: string;
  sm: string;
  xs: string;
};

type ColorPalette = {
  main: string;
  background: string;
  primary: string;
  primaryDark: string;
  primaryLight: string;
  secondary: string;
  secondaryLight: string;
  white: string;
  black: string;
  grey: string;
  greyDark: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    bp: Breakpoints;
    light: ColorPalette;
    dark: ColorPalette;
    color: ColorPalette;
  }
}

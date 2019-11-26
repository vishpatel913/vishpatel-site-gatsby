import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import theme from "../assets/theme";

const renderWithTheme = tree => renderer.create(
  <ThemeProvider theme={theme}>
    {tree}
  </ThemeProvider>
);

export default renderWithTheme;

import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

const renderWithTheme = tree =>
  renderer.create(
    <ThemeProvider theme={{ ...theme, ...theme.light }}>{tree}</ThemeProvider>
  );

export default renderWithTheme;

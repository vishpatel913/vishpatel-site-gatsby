import Typography from "typography";

const typography = new Typography({
  baseFontSize: "16px",
  googleFonts: [
    {
      name: "Raleway",
      styles: ["200", "400", "700"]
    },
    {
      name: "Open Sans",
      styles: ["400", "700"]
    }
  ],
  headerFontFamily: ["Raleway", "sans-serif"],
  bodyFontFamily: ["Raleway", "sans-serif"],
  bodyWeight: 400,
  headerWeight: 700,
  lightWeight: 200,
  boldWeight: 700,
  overrideStyles: () => ({
    "html, body": {
      height: "100%"
    },
    "#___gatsby, #gatsby-focus-wrapper": {
      height: "100%"
    },
    h1: {
      marginBottom: "1rem"
    },
    p: {
      marginBottom: "1rem"
    },
    img: {
      margin: "0"
    },
    a: {
      textDecoration: "none",
      transition: "all 0.2s"
    }
  })
});

const { rhythm, scale } = typography;
export { rhythm, scale, typography as default };

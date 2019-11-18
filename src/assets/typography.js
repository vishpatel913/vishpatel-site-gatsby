import Typography from "typography";
import theme from "./theme";

const typography = new Typography({
  baseFontSize: "18px",
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
    body: {
      background: theme.color.background
    },
    p: {
      marginBottom: "1rem"
    },
    img: {
      margin: "0"
    },
    a: {
      textDecoration: "none",
      color: theme.color.primary
    },
    "a:hover": {
      color: theme.color.primaryLight
    },
    button: {
      display: "inherit",
      cursor: "pointer",
      color: theme.color.greyDark,
      background: theme.color.background,
      margin: "0",
      padding: "0.5rem 1rem",
      border: "solid 1px",
      borderColor: theme.color.grey,
      borderRadius: "4px",
      fontWeight: "lighter",
      transition: "all 0.3s ease 0s"
    },
    "button:hover": {
      color: "white",
      background: theme.color.primary,
      borderColor: theme.color.primaryDark
    }
  })
});

const { rhythm, scale } = typography;
export { rhythm, scale, typography as default };

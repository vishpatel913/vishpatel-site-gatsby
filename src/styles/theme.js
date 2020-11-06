export default {
  spacing: (n, ...args) =>
    args.reduce(
      (acc, c, i) =>
        i < 4 && (typeof c === "string" ? `${acc} ${c}rem` : `${acc} ${c}`),
      typeof n === "number" ? `${n}rem` : n
    ),
  bp: {
    lg: "1200px",
    md: "992px",
    sm: "768px",
    xs: "480px"
  },
  light: {
    main: "#323232",
    background: "#f7f7f7",
    primary: "#512DA8",
    primaryDark: "#140078",
    primaryLight: "#de9edf",
    // primaryLight: "#8559da",
    secondary: "#35cdbc",
    secondaryLight: "#7ddddf",
    white: "#fff",
    black: "#000",
    grey: "#E0E0E0",
    greyDark: "#595959"
  },
  dark: {
    main: "#f7f7f7",
    background: "#19143c",
    primary: "#00ff86",
    primaryLight: "#11aa61",
    primaryDark: "#75fbbb",
    secondary: "#ff0062",
    secondaryLight: "#a4184e",
    // secondary: "#e4ff01",
    // secondaryLight: "#11aa61",
    white: "#1d1642",
    black: "#fff",
    grey: "#37315e",
    greyDark: "#E0E0E0"
  }
};

export const tokens = {
  primary: {
    //grey
    0: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#616161",
    700: "#3a3a43",
    800: "#1c1c24",
    900: "#13131a", //manually added
  },
  secondary: {
    50: "#ede7f6", // manually adjusted
    100: "#d1c4e9",
    200: "#b39ddb",
    300: "#9575cd",
    400: "#7e57c2",
    500: "#673ab7",
    600: "#5e35b1",
    700: "#512da8",
    800: "#4527a0",
    900: "#311b92",
    A100: "#b388ff",
    A200: "#7c4dff",
    A400: "#651fff",
    A700: "#6200ea",
  },
  tertiary: {
    A100: "#ff80ab",
    A200: "#ff4081",
    A400: "#f50057",
    A700: "#c51162",
  },
};

export const themeSettings = () => {
  return {
    palette: {
      primary: {
        ...tokens.primary,
        main: tokens.primary[700],
      },
      secondary: {
        ...tokens.secondary,
        main: tokens.secondary[300],
      },
      tertiary: {
        ...tokens.tertiary,
        main: tokens.tertiary["A400"],
      },
      background: {
        default: tokens.primary[900],
        alt: tokens.primary[800],
      },
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

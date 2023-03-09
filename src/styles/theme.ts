import type { ThemeOptions } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import localFont from "@next/font/local";

import { colors } from "../constants/colors";

const Poppins = localFont({
  src: "../assets/fonts/Poppins-Regular.otf",
});

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    // @ts-ignore
    altBackground?: boolean;
    // @ts-ignore
    palette?: {
      primary?: {
        main?: string;
      };
      secondary?: {
        main?: string;
      };
      background?: {
        default?: string;
        paper?: string;
      };
    };
  }

  export interface CommonColors {
    brightBlue: string;
    lavender: string;
    limeGreen: string;
    navy: string;
    magenta: string;
    slate: string;
    mistyDay: string;
    white: string;
    black: string;
    dawn: string;
    smoke: string;
    folly: string;
    silver: string;
    reddish: string;
    darkViolet: string;
    blue: string;
  }
}

// @ts-ignore
export const themeOptions: ThemeOptions = {
  altBackground: false,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: colors.brightBlue,
    },
    secondary: {
      main: colors.folly,
    },
    background: {
      default: colors.silver,
      paper: colors.white,
    },
    error: {
      main: colors.reddish,
    },
    common: {
      brightBlue: colors.brightBlue,
      lavender: colors.lavender,
      limeGreen: colors.limeGreen,
      navy: colors.navy,
      magenta: colors.magenta,
      slate: colors.slate,
      mistyDay: colors.mistyDay,
      white: colors.white,
      black: colors.black,
      dawn: colors.dawn,
      smoke: colors.smoke,
      folly: colors.folly,
      silver: colors.silver,
      reddish: colors.reddish,
      darkViolet: colors.darkViolet,
      blue: colors.blue,
    },
    text: {
      secondary: colors.blue,
      primary: colors.blue,
    },
    action: {
      disabledOpacity: 0.7,
      disabledBackground: colors.lavender,
      disabled: colors.white,
    },
  },
  typography: {
    body1: {
      // @ts-ignore
      fontFamily: Poppins,
      fontSize: 14,
    },
    caption: {
      // @ts-ignore
      fontFamily: Poppins,
      color: colors.darkViolet,
    },
    h1: {
      // @ts-ignore
      //   fontFamily: Montserrat,
      fontSize: "26px",
    },
    h2: {
      // @ts-ignore
      fontFamily: Poppins,
      fontWeight: 400,
      color: colors.black,
    },
    h3: {
      // @ts-ignore
      fontFamily: Poppins,
      fontWeight: 400,
      color: colors.black,
    },
    h4: {
      // @ts-ignore
      fontFamily: Poppins,
      fontWeight: 500,
      color: colors.black,
    },
    // @ts-ignore
    body3: {
      // @ts-ignore
      fontFamily: Poppins,
      fontSize: 12,
      lineHeight: "18px",
    },
    strong: {
      color: colors.darkViolet,
      fontFamily: Poppins,
      fontSize: 14,
      lineHeight: "16px",
    },
    button: {
      // @ts-ignore
      fontFamily: Poppins,
      color: colors.white,
      textTransform: "none",
      fontStyle: "normal",
      fontWeight: 400,
      letterSpacing: 0,
    },
    input: {
      // @ts-ignore
      fontFamily: Poppins,
    },
  },
};

export default createTheme(themeOptions);

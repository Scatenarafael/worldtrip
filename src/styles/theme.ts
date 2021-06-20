import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
// 2. Update the breakpoints as key-value pairs
const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
});

export const theme = extendTheme({
  colors: {
    gray: {
      "600": "#47585B",
      "300": "#999999",
      "100": "#cbcbcb",
    },
    white: {
      "500": "#DADADA",
      "300": "#F5F8FA",
    },
    yellow: {
      "800": "#FFBA08",
      "400": "#ffdc83",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },

  styles: {
    global: {
      body: {
        bg: "white.300",
        color: "gray.600",
      },
    },
  },
});

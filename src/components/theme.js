import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
 colors: {
  light: {
   primary: "#fff",
   secondary: "#000",
   text: "#000"
  },
  dark: {
   primary: "#000",
   secondary: "#fff",
   text: "#fff"
  },
 },
});

export default theme;
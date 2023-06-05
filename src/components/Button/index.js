import { useColorMode, IconButton } from "@chakra-ui/react";
import {MoonIcon, SunIcon} from "@chakra-ui/icons";


function ThemeToggle() {
 const {colorMode, toggleColorMode} = useColorMode();


 return (
  <IconButton
    icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    onClick={toggleColorMode}
    aria-label="Toggle Theme"
  />
 )
}

export default ThemeToggle;
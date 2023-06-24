import { HamburgerIcon } from "@chakra-ui/icons";
import { 
 Menu,
 MenuButton,
 MenuList, 
 MenuItem,
 IconButton
 } from "@chakra-ui/react";
import { Link } from "react-router-dom";

 function MenuNavigation() {
  return (
   <>
     <Menu display="flex" marginLeft="auto">
      <MenuButton 
      as={IconButton} 
      arial-label="options"
      icon={<HamburgerIcon />}
      variant="outline"
      transition="all 0.2s"
      _hover={{bg: "gray.400"}}
      >
      </MenuButton>
      <MenuList>
       <MenuItem fontSize="xl"><Link to="/profile">perfil</Link></MenuItem>
       <MenuItem fontSize="xl"><Link to="/">bio</Link></MenuItem>
       <MenuItem fontSize="xl"><a href="https://github.com/michaelmoranis" target="_blanck">github</a></MenuItem>
      </MenuList>
     </Menu>
   </>
  )
 }

 export default MenuNavigation;
import { HamburgerIcon } from "@chakra-ui/icons";
import { 
 Menu,
 MenuButton,
 MenuList, 
 MenuItem,
 IconButton
 } from "@chakra-ui/react";

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
        Actions
      </MenuButton>
      <MenuList>
       <MenuItem fontSize="xl">perfil</MenuItem>
       <MenuItem fontSize="xl">github</MenuItem>
       <MenuItem fontSize="xl">trabalhos</MenuItem>
      </MenuList>
     </Menu>
   </>
  )
 }

 export default MenuNavigation;
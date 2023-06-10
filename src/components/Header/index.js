import React, { useEffect, useState } from "react";
import LogoLink from "./Logo";
import Navigation from "components/Navgation";
import styles from "./header.module.scss"
import { useColorModeValue } from "@chakra-ui/react";

function Header() {
  const [Scrolled, setScrolled] = useState(false);
  const textColor = useColorModeValue("black", "white")

  useEffect(() => {
    const  handleScroll = () => {
      const scrollTop = window.scrollY;
      if(scrollTop > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
  }, []);

 return (
   <header className={`${styles.container_header} ${Scrolled ? styles.darkBackGround : ""}  ${textColor}}`}>
     <LogoLink />
     <Navigation />
   </header>
 )
}

export default Header;
import React from "react";
import LogoLink from "./Logo";
import Navigation from "components/Navgation";
import styles from "./header.module.scss"

function Header() {
 return (
   <header className={styles.container_header}>
     <LogoLink />
     <Navigation />
   </header>
 )
}

export default Header;
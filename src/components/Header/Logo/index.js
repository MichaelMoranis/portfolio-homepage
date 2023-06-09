import { Link } from "react-router-dom";
import styles from "./logo.module.scss"

function LogoLink() {
 return (
   <Link to="/" className={styles.container__logo}>
     MichaelM
   </Link>
 )
}

export default LogoLink;
import { Link } from "react-router-dom";
import styles from "./logo.module.scss"

function LogoLink() {
 return (
   <Link className={styles.container__logo}>Michael Moranis</Link>
 )
}

export default LogoLink;
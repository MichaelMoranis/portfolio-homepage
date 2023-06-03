import { Link } from "react-router-dom";
import styles from "./navigation.module.scss"
import ThemeToggle from "components/Button";

function Navigation() {
  const navigationItem = [
    {
      profile: "Perfil",
      bio: "Biografia",
      works: "Trabalhos"
    }
  ]
 return (
   <>
     <nav className={styles.navigation}>
        <ul className={styles.listItem}>
          {navigationItem.map((item, index) => (
            <li key={index}>
              <Link to="/" className={styles.itens}>{item.profile}</Link>
              <Link to="/" className={styles.itens}>{item.bio}</Link>
              <Link to="/" className={styles.itens}>{item.works}</Link>
              <ThemeToggle />
            </li>
          ))}
        </ul>
     </nav>
   </>
 )
}

export default Navigation;

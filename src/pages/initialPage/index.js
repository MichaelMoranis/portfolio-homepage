import Posts from "components/Posts";
import styles from "./initial.module.scss";
import posts from "json/post.json";
import { Link } from "react-router-dom";

function InitialPage() {
  return (
    <main className={styles.container}>
      <div className={styles.container__titulo}>
        <h1 className={styles.titulo}>
          Desenvolvedor web interessado em desenvolvimento de aplicativos,
          sites, jogos e sistemas baseados na web!
        </h1>
      </div>
      <div className={styles.content__paragraf}>
        <p className={styles.container__paragraf}>
          👋 Olá, sou Michael, um desenvolvedor focado em FrontEnd que mora em
          Cascavel PR. Atualmente estou em desenvolvimento de novas habilidades
          em engenharia de software !
        </p>
        <div className={styles.container__link}>
        <Link to="/profile" className={styles.link}>
          Ver meu perfil 
        </Link>
        </div>
      </div>
      <section className={styles.containerPage}>
        <Posts posts={posts} />
      </section>
    </main>
  );
}

export default InitialPage;

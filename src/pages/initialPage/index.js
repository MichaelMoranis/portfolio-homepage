import Posts from "components/Posts";
import styles from "./initial.module.scss";
import posts from "json/post.json"; 

function InitialPage() {
  return (
    <main className={styles.container}>
      <div className={styles.container__titulo}>
        <h1 className={styles.titulo}>
          Um engenheiro web interessado em desenvolvimento de aplicativos, sites, 
          jogos e sistemas baseados na web !
        </h1>
      </div>
      <p className={styles.container__paragraf}>
       👋 Olá, sou Michael, um desenvolvedor focado em FronEnd que mora em Cascavel PR. Atualmente estou
        em desenvolvimento de novas habilidades em engenharia de software !
      </p>
      <section className={styles.containerPage}>
        <Posts posts={posts} />

      </section>
    </main>
  );
}

export default InitialPage;

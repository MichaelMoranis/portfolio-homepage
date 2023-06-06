import Posts from "components/Posts";
import styles from "./initial.module.scss";

function InitialPage() {
  return (
    <main className={styles.container}>
      <div className={styles.container__titulo}>
        <h1 className={styles.titulo}>
          Um engenheiro web interessado em sistemas de design e em fechar a
          lacuna entre design e desenvolvimento
        </h1>
      </div>
      <p className={styles.container__paragraf}>
       👋 Olá, sou Michael, um desenvolvedor focado em FronEnd que mora em Cascavel PR.    Atualmente estou
        em desenvolvimento de novas habilidades no universo da programacao !!
      </p>
      <section>
        <Posts />
      </section>
    </main>
  );
}

export default InitialPage;

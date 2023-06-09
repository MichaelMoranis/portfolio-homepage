import styles from "./profile.module.scss";

function Profile() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Perfil</h1>
      <p className={styles.paragraf}>
        Sou Michael, um  desenvolvedor web. Atualmente estou morando em
        Cascavel PR, e buscando oportunidades em desenvolvimento web, onde estou buscando contribuir a construir a
        próxima geração de aplicativos web.
      </p>
      <p className={styles.paragraf}>
        Tenho uma paixão particular por sistemas de desenvolvimento de software e ferramentas de design
        , tenho tido a oportunidade de trabalhar com essas ferramentas  em meus
        estudos anteriores e em projetos desenvolvidos por mim aqui na web.
      </p>
      <p className={styles.paragraf}>
        De vez em quando também escrevo artigos, inclusive no Dev.To !
      </p>
      <h2>Buscando experiencias</h2>
      <p className={styles.paragraf}>
        <strong>Buscando experiencias</strong> <small>(Estudando desde 2021)</small>
      </p>
      <p className={styles.paragraf}>
        Como engenheiro da web, tenho procurado me atualizar sempre, buscando estar por dentro das noticias e novidades que acontecem na comunidade de desenvolvimento !
      </p>
    </section>
  );
}

export default Profile;

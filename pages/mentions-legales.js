import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { AppHeader } from "@/components/header.js";
import { AppFooter } from "@/components/footer.js";

export default function MentionsLegales() {
  return (
    <>
      <Head>
        <title>Stop aux violences motorisées !</title>
        <meta name="description" content="Stop aux violences motorisées !" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppHeader />
      <div className={`${styles.page}`}>
        <main className={styles.main}>
          <h1>Mentions légales</h1>

          <h2>Éditeur</h2>
          <p>
            FUB – Association – Fédération française des Usagers de la
            Bicyclette, 12 rue Finkmatt, 67000 Strasbourg
          </p>

          <h2>Responsable publication</h2>
          <p>
            Fédération française des Usagers de la Bicyclette – contact@fub.fr
          </p>

          <h2>Conception</h2>
          <p>
            <a href="codeursenliberte.fr/" target="_blank">
              Codeureuses en Liberté
            </a>
          </p>

          <h2>Hébergement</h2>
          <p>Github Pages</p>

          <h2>Politique de confidentialité</h2>
          <p>
            La politique de confidentialité applicable est{" "}
            <a href="https://www.fub.fr/mentions-legales" target="_blank">
              celle précisée sur le site internet de la FUB
            </a>
            .
          </p>
        </main>
        <AppFooter />
      </div>
    </>
  );
}

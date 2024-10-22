import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

import { AppHeader } from "@/components/header.js";
import { AppForm } from "@/components/form.js";
import { AppFooter } from "@/components/footer.js";

import { LogoFUB } from "@/components/images/fub.js";
import { LogoFFV } from "@/components/images/ffv.js";
import { LogoFVM } from "@/components/images/fvm.js";
import { LogoLHC } from "@/components/images/lhc.js";
import { LogoRAC } from "@/components/images/rac.js";
import { LogoWimoov } from "@/components/images/wimoov.js";

export default function Home() {
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
        <div className="buttons">
          <Link className="button is-large" href="#signez" scroll={false}>
            Je veux signer l’appel
          </Link>
          <Link className="button is-large" href="#temoignez" scroll={false}>
            Je veux témoigner
          </Link>
        </div>
        <main className={styles.main}>
          <h1 className="is-size-3">
            Stop aux violences motorisées : contre la banalisation, signez la
            pétition
          </h1>
          <p>
            Mardi 15 octobre à 17h45, Paul Varry, 27 ans, a été tué par un
            conducteur de SUV alors qu’il rentrait du travail. Sa mort a ému
            chacun d’entre nous, en tant que cyclistes, piétons, parents,
            automobilistes ou citoyennes et citoyens.
          </p>
          <p>
            Paul est loin d’être la première victime de cette violence : tant
            que nous resterons silencieux, il ne sera pas la dernière.
          </p>
          <p>
            Dépassements dangereux, insultes, queues de poisson, intimidations,
            violences physiques… Chaque jour, nous sommes des millions à subir
            les violences motorisées. Ces agressions sont de plus en plus
            nombreuses et encore trop banalisées.
          </p>
          <p>
            Vous avez été des dizaines de milliers à vous rassembler dans toute
            la France pour dire  stop aux violences motorisées » à la suite de
            ce drame.
          </p>
          <p>
            Aujourd’hui, il est urgent que la société ouvre les yeux. Unissons
            nos voix pour rappeler l’urgence de protéger les usagères et les
            usagers les plus vulnérables sur nos routes et dans nos rues.
          </p>
          <p>
            La FUB appelle le Gouvernement à fixer un objectif clair :{" "}
            <strong>0 tué et 0 blessé grave sur la route</strong>.
          </p>

          <div>
            <p>Nos revendications sont précises :</p>
            <ul>
              <li>
                <strong>
                  Recueillir les plaintes et sanctionner systématiquement les
                  comportements violents
                </strong>{" "}
                qui mettent chaque jour des vies en danger.
              </li>
              <li>
                <strong>
                  Développer la formation continue des automobilistes
                </strong>{" "}
                et apprendre à chaque enfant à se déplacer à vélo en autonomie
                au cours de sa scolarité.
              </li>
              <li>
                <strong>Créer des aménagements cyclables sécurisés</strong>{" "}
                partout en France, pour que chacune et chacun puisse choisir le
                vélo sans crainte.
              </li>
              <li>
                <strong>Garantir un budget vélo ambitieux</strong> afin que la
                France comble son retard.
              </li>
              <li>
                <strong>Assurer un suivi régulier des mesures</strong> par le
                gouvernement pour que ces engagements deviennent réalité.
              </li>
            </ul>
          </div>

          <p>
            La société doit sortir du déni, pour reconnaître et sanctionner ces
            violences.
          </p>

          <p>
            Nous avons le droit de pouvoir nous déplacer en sécurité, quel que
            soit notre mode de transport !
          </p>
          <p>
            Nos voix et nos rassemblements montrent clairement que{" "}
            <strong>nous ne voulons plus attendre</strong>. Il est urgent d’agir
            pour protéger chaque personne sur la route et dans les rues.
          </p>

          <p>
            Pour partager nos expériences et sortir de la banalisation de la
            violence motorisée, la FUB lance un{" "}
            <a
              target="_blank"
              href="https://www.fub.fr/fub/actualites/stop-aux-violences-moto
risees-contre-banalisation-partagez-vos-temoignages"
            >
              appel à témoignages
            </a>
            .
          </p>

          <p>
            <strong id="signez">Signez et partagez !</strong>
          </p>

          <iframe
            width="600"
            height="845"
            src="https://b6623b61.sibforms.com/serve/MUIFAD50yOvyKbcx_MjJcI3nyzFSpEVM7g0SOZF74KH7_-wrWLIz8Ijjn-7djqfC5jonIeyMN3FNre__1fnPyO5JpfvdxeNjRRt2yT10mU-QnF4ryun6r-pSYMwb5Tb40FFu3WhyVoVFDWlA8Xy08e0xzYSz8DJVrW8bbUpIeKctAJDm9jN8HDhQY_T6XhMU6HmSsll6oxHRoGEn"
            frameBorder="0"
            scrolling="auto"
            allowFullScreen
            style={{
              display: "block",
              "margin-left": "auto",
              "margin-right": "auto",
              "max-width": "100%",
            }}
          ></iframe>

          <div id="temoignez">
            <h2 className="is-size-4">Votre témoignage</h2>
            <AppForm />
          </div>

          <div>
            <h2 className="is-size-4">Plateforme à l'initiative de la FUB</h2>
            <LogoFUB />
          </div>

          <div>
            <h2 className="is-size-4">En partenariat avec</h2>
            <LogoFFV />
            <LogoFVM />
            <LogoLHC />
            <LogoRAC />
            <LogoWimoov />
          </div>
        </main>
        <AppFooter />
      </div>
    </>
  );
}

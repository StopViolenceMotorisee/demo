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
        <title>Stop road violence!</title>
        <meta name="description" content="Stop aux violences motorisées !" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppHeader />

      <div className={`${styles.page}`}>
        <div className="buttons">
          <Link
            className="button is-medium is-warning"
            href="#signez"
            scroll={false}
          >
            I sign this call
          </Link>
          <Link
            className="button is-medium is-warning"
            href="#temoignez"
            scroll={false}
          >
            I share my experience
          </Link>
          <Link href="/">🇨🇵</Link>/<Link href="/english">🇬🇧</Link>
        </div>
        <main className={styles.main}>
          <h1 className="is-size-3">
            Stop road violence by signing the petition against its normalisation
          </h1>
          <p>
            <i>Petition adressed to the Prime Minister and his government</i>
          </p>
          <p>
            On the 15th of October at 5:45 p.m. Paul Varry, 27 years old, was
            killed by an SUV driver on his commute home from work in central
            Paris. His death was a shock to us all, whether we are cyclists,
            pedestrians, parents, car drivers, or citizens.
          </p>
          <p>
            Paul was far from being the first victim of this type of violence,
            and if we remain silent he won’t be the last.
          </p>
          <p>
            Every day, millions of us are victims of close passes, insults,
            dangerous manoeuvres, intimidations and even physical violence while
            cycling. These aggressions are more and more frequent and remain too
            normalised.
          </p>
          <p>
            Tens of thousands of people gathered all over France following that
            tragedy to say “Stop road violence”.
          </p>
          <p>
            It is now urgent that our society opens its eyes. By uniting and
            speaking with one voice, we can highlight the urgency of protecting
            the most vulnerable users on our roads and streets.
          </p>
          <p>
            The French Bike User’s Federation (FUB) is calling the French
            government to fix a clear objective:{" "}
            <strong>zero road deaths and severe injuries</strong>.
          </p>

          <div>
            <p>We have clear demands:</p>
            <ul>
              <li>
                <strong>
                  Taking into account complaints and systematically sanctioning
                  violent behaviour
                </strong>{" "}
                putting lives at risk every day.
              </li>
              <li>
                <strong>Developing lifelong driver training</strong> and
                teaching every child how to ride a bike autonomously at school.
              </li>
              <li>
                <strong>Creating safe cycling infrastructure</strong> everywhere
                in France so that fear is no longer a reason not to cycle.
              </li>
              <li>
                <strong>Investing an ambitious budget</strong> so that France
                can catch up with its neighbours.
              </li>
              <li>
                <strong>Ensuring these measures are monitored closely</strong>{" "}
                by the government so these those pledges become reality.
              </li>
            </ul>
          </div>

          <p>
            Our society must stop living in denial so that this violence is
            recognised and sanctioned.
          </p>

          <p>
            We must be able to move around safely whichever method of transport
            we choose!
          </p>
          <p>
            Our voices and protests clearly show we are no longer willing to
            wait. We must act now to protect every citizen on our streets and
            roads.
          </p>

          <p>
            <strong id="signez">Please sign and share!</strong>
          </p>

          <iframe
            width="600"
            height="845"
            src="https://b6623b61.sibforms.com/serve/MUIFANF-_pKOZ7tDX-g2lJk58enUcPvwcLvnrQmvb5TX3aq3dO2YiIT58pdGezK4I6o5QDoLQWYnXAnOeaLd_6qqZBXoxVzkyFwnN5iZ5PER4YOdzIDdGGRcFc5724QuKlhCrAwSwbehOWi2wdhzaanCmNx7N-PwjvVBQZS8eQT1cyTyMLNqB_EtOAUYTDTq8QewC9zWD7N8SLGd"
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
            <h2 className="is-size-4">Sharing your experience</h2>
            <AppForm en />
          </div>

          <div>
            <h2 className="is-size-4">Initiated by FUB</h2>
            <LogoFUB />
          </div>

          <h2 className="is-size-4">In association with</h2>
        </main>
        <div>
          <LogoFFV />
          <LogoFVM />
          <LogoLHC />
          <LogoRAC />
          <LogoWimoov />
        </div>
        <AppFooter />
      </div>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export function AppHeader() {
  return (
    <div className={styles.logoBox}>
      <Link href="/">
        <Image
          className={styles.logo}
          src="/photo_pauavelo_bandeau.jpg"
          alt="Photo d’une manifestation de soutien à Paul"
          width={2048}
          height={916}
          priority
        />
      </Link>
    </div>
  );
}

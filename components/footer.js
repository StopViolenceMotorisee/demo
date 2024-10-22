import styles from "@/styles/Home.module.css";
import Link from "next/link";

export function AppFooter() {
  return (
    <footer className={styles.footer}>
      <Link href="/">Version française</Link>
      <Link href="/english">English version</Link>
      <Link href="/mentions-legales">Mentions légales</Link>
    </footer>
  );
}

import Link from "next/link";

export function Langs() {
  return (
    <>
      <Link href="/">
        <span className="sib-flag sib-flag-fr"></span>
      </Link>
      /
      <Link href="/english">
        <span className="sib-flag sib-flag-gb"></span>
      </Link>
    </>
  );
}

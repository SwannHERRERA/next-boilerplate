import Link from "next/link";

export function Menu() {
  return (
  <>
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/blog">Blog</Link>
      </li>
      <li>
        <Link href="/uses">uses</Link>
      </li>
    </ul>
  </>
  );
}

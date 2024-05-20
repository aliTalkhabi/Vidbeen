'use client'
import { usePathname } from "next/navigation";
import styles from "../page.module.css";
export default function Handler() {
  const pathname = usePathname()
  console.log(pathname);
  return (
    <main className={styles.main}>
      <h1> handler</h1>
    </main>
  );
}

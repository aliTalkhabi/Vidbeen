"use client";
import { usePathname } from "next/navigation";
import styles from "../page.module.css";
export default function Handler() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <main className={styles.main}>
      {pathname === "/category" ? (
        <p>category handler</p>
      ) : pathname === "/product" ? (
        <p>product handler</p>
      ) : pathname !== "/category" || pathname !== "/product" ? (
        <p>not-found</p>
      ) : null}
    </main>
  );
}

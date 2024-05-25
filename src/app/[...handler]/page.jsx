"use client";
import { usePathname } from "next/navigation";
import styles from "../page.module.css";
import Category from "@/components/category/category";

export default function Handler() {
  
  const pathname = usePathname();
  return (
    <main className={styles.main}>
      {pathname === "/category" ? (
        <>
          <Category />
        </>
      ) : pathname === "/product" ? (
        <p>product handler</p>
      ) : pathname !== "/category" || pathname !== "/product" ? (
        <p>not-found</p>
      ) : null}
    </main>
  );
}

"use client";
import { usePathname } from "next/navigation";
import styles from "../page.module.css";
import Category from "@/components/category/category";
import Product from "@/components/product/Product";

export default function Handler() {
  
  const pathname = usePathname();
  return (
    <main className={styles.main}>
      {pathname === "/category" ? (
        <>
          <Category />
        </>
      ) : pathname === "/category/product" ? (
        <>
          <Product />
        </>
      ) : pathname !== "/category" || pathname !== "/product" ? (
        <p>not-found</p>
      ) : null}
    </main>
  );
}

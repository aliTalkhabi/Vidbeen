"use client";
import { usePathname } from "next/navigation";
import styles from "../page.module.css";
import Category from "@/components/category/category";
import Product from "@/components/product/Product";
import Custom404 from "../404";

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
        <Custom404 />
      ) : null}
    </main>
  );
}

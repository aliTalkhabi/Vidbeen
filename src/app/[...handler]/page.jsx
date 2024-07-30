"use client";
import { usePathname } from "next/navigation";

import Category from "@/components/Category/Category";
import Product from "@/Components/Product/Product";
import Custom404 from "../404";

export default function Handler() {
  
  const pathname = usePathname();
  return (
    <>
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
    </>
  );
}

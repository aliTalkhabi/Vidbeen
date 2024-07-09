"use client";
import { Link, Skeleton, Stack } from "@mui/material";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import React from "react";
const BreadcrumbDynamic = dynamic(() => import("@mui/material/Breadcrumbs"), {
  ssr: false,
  loading: () => <Skeleton variant="rectangular" animation="wave"/>,
});
export default function Breadcrumb() {
  const pathname = usePathname();

  const breadcrumb = [
    <Link key="1" color="inherit" href="/">
      خانه
    </Link>,
    <Link
      key="2"
      color={pathname === "/category" ? "text.primary" : "inherit"}
      href={pathname === "/category" ? null : "/category"}
      style={pathname === "/category" ? { textDecoration: "none" } : null}
    >
      شاخه
    </Link>,
    <Link
      key="3"
      color={pathname === "/category/product" ? "text.primary" : "inherit"}
      href={pathname === "/category/product" ? null : "/category/product"}
      style={pathname === "/category/product" ? { textDecoration: "none" } : null}
    >
      محصول
    </Link>,
  ];

  return (
    <Stack component="section" spacing={2} sx={{ margin: "1rem auto", width:'85%' }}>
      <BreadcrumbDynamic component='nav' separator="»" aria-label="breadcrumb" sx={{fontFamily:'Dana-Regular'}}>
        {pathname === "/"
          ? breadcrumb.slice(0, 1)
          : pathname === "/category"
          ? breadcrumb.slice(0, 2)
          : pathname === "/category/product"
          ? breadcrumb.slice(0, 3)
          : null}
      </BreadcrumbDynamic>
    </Stack>
  );
}

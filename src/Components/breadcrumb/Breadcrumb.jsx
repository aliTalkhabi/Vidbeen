"use client";
import { Breadcrumbs, Link, Stack, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import React from "react";

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
      color={pathname === "/product" ? "text.primary" : "inherit"}
      href={pathname === "/product" ? null : "/product"}
      style={pathname === "/product" ? { textDecoration: "none" } : null}
    >
      محصول
    </Link>,
  ];

  return (
    <Stack spacing={2} sx={{ margin: "1rem 0", padding: "0 8%" }}>
      <Breadcrumbs separator="»" aria-label="breadcrumb">
        {pathname === "/"
          ? breadcrumb.slice(0, 1)
          : pathname === "/category"
          ? breadcrumb.slice(0, 2)
          : pathname === "/product"
          ? breadcrumb.slice(0, 3)
          : null}
      </Breadcrumbs>
    </Stack>
  );
}

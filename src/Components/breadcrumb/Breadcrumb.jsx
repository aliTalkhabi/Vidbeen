'use client'
import { Breadcrumbs, Link, Stack, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import React from "react";

export default function Breadcrumb() {
  const pathname = usePathname()
  
  const breadcrumb = [
    <Link key="1" color="inherit" href="/">
      خانه
    </Link>,
    <Link key="2" color="inherit" href="/category" >
      شاخه
    </Link>,
    <Typography key="3" color="text.primary">
      محصول
    </Typography>
  ];
  
  return (
    <Stack spacing={2} sx={{margin:'1rem 0',padding:'0 8%'}}>
      <Breadcrumbs separator="»" aria-label="breadcrumb">
        {breadcrumb.map(breadcrumbs=>{

        })}
      </Breadcrumbs>
    </Stack>
  );
}

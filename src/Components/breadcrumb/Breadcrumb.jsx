import { NavigateNext } from "@mui/icons-material";
import { Breadcrumbs, Link, Stack, Typography } from "@mui/material";
import React from "react";

export default function Breadcrumb() {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  const breadcrumbs = [
    <Link key="1" color="inherit" href="/">
      خانه
    </Link>,
    <Link key="2" color="inherit" href="/category" onClick={handleClick}>
      شاخه
    </Link>,
    <Typography key="3" color="text.primary">
      محصول
    </Typography>
  ];
  return (
    <Stack spacing={2}>
      <Breadcrumbs separator="»" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <Breadcrumbs separator="»" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <Breadcrumbs
        separator={<NavigateNext fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}

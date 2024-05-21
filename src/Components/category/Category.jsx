"use client";
import {  Container, Skeleton } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";
import Breadcrumb from "../breadcrumb/Breadcrumb";

export default function Category() {
  const SideBarDynamic = dynamic(
    () => import("@/components/rightList/RightList"),
    {
      ssr: false,
      loading: () => (
        <div>
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={250}
            height={250}
          />
        </div>
      ),
    }
  );
  const BoxDynamic = dynamic(() => import("@mui/material/Box"), {
    ssr: false,
    loading: () => {
      <Skeleton animation="wave" variant="rectangular" width={1200} />;
    },
  });
  return (
    <>
      <Container
        component="section"
        sx={{
          border: "1px solid black",
          display: "grid",
          gridAutoFlow: "column",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr",
            md: "2fr 6fr",
            lg: "1fr 3fr",
          },
          gap: "10px 10px",
          height: "100%",
        }}
      >
        <BoxDynamic
          component="aside"
          sx={{
            display: { xs: "none", sm: "none", md: "block", lg: "block" },
          }}
        >
          <SideBarDynamic />
        </BoxDynamic>
        <BoxDynamic component='section' sx={{}}>
          
        </BoxDynamic>
      </Container>
    </>
  );
}

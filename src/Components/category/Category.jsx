"use client";
import { Box, Container, Skeleton, Stack } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";



export default function Category() {
  const SideBarDynamic = dynamic(
    () => import("@/components/RightList/RightList"),{
      ssr: false,
      loading: () => (
        <div>
          <Skeleton
            animation="wave"
            variant="rectangular"
            sx={{ width: '250px', height: '195px' }}
          />
        </div>
      ),
    }
  );
 const CardsDynamic = dynamic(() => import("../Card/Cards"), {
    ssr: false,
    loading: () => <Skeleton animation="wave" variant="rectangular" width={856} sx={{height:'100vh'}} />,
  });

  return (
    <>
      <Stack component='section'>
        <Container component="section" sx={{
          display: "grid",
          gridAutoFlow: "column",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr",
            md: "2fr 6fr",
            lg: "1fr 3fr",
          },
          gap: "10px 10px",
        }}
        >

          <Box component="aside" sx={{
            display:
              { xs: 'none', sm: 'none', md: 'block' }
          }} >
            <SideBarDynamic />
          </Box>
          <Box
            component="section"
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gridTemplateRows: "repeat(6, 1fr)",
              gap: "10px",
              padding: { xs: "0", sm: "0", md: "0 2rem" },
            }}
          >
            <CardsDynamic typeCards="category-page-items" />
          </Box>
        </Container>
      </Stack >

    </>
  );
}

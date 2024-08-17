"use client";
import { QueryBuilderRounded } from "@mui/icons-material";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import { Box, Card, CardActionArea, CardContent, Container, Skeleton, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import JalaliDate from "../JalaliDate/JalaliDate";

const SideBarDynamic = dynamic(
  () => import("@/components/RightList/RightList"), {
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

export default function Category({ data, pathname }) {
  const dataCategoriesItem = data.videos;

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

            {dataCategoriesItem.map(item => {
              return (
                <section key={item.id}>
                  <Card variant="article" component="article" sx={{
                    maxWidth: "100%",
                    background: "none",
                    boxShadow: "none",
                    height: { lg: "350px" },
                  }}>
                    <Link href={`${pathname}/${item.slug}`} title={item.title}>
                      <CardActionArea component='section'>
                        <picture>
                          <source srcSet={`https://vidbeen.ir/public/${item.poster}`} />
                          <img src={`https://vidbeen.ir/public/${item.poster}`} alt={item.title} width={160} height={90} style={{
                            width: "100%",
                            height: "200px",
                            objectFit: "contain",
                          }} />
                        </picture>
                        <CardContent sx={{ padding: { xs: "16px", sm: "16px", md: "0" } }}>
                          <Typography variant="p" component='p' sx={{
                            fontSize: "16px",
                            height: {
                              xs: "45px",
                              sm: "65px",
                              md: "65px",
                              lg: "60px",
                            },
                            textAlign: "justify",
                            color: "#111010",
                            margin: "5px auto",
                            fontWeight: "400",
                            lineHeight: "1.5",
                            padding: "0 10px",
                          }}>
                            {item.main_name}
                          </Typography>
                          <Typography
                            component="p"
                            sx={{
                              display: "flex",
                              flexWrap: "wrap",
                              color: "#00000080",
                            }}
                          >
                            <QueryBuilderRounded
                              sx={{
                                marginBottom: ".5rem",
                                marginRight: "1rem",
                                marginLeft: ".5rem",
                              }}
                            />
                            <Typography
                              component="span"
                              sx={{
                                width: {
                                  xs: "80%",
                                  sm: "calc(80% - 1rem)",
                                  md: "calc(100% - 3rem)",
                                  lg: "80%",
                                },
                              }}
                            >
                              تاریخ انتشار : {JalaliDate(item.created_at)}
                            </Typography>
                            <VisibilityRoundedIcon
                              sx={{ marginRight: "1rem", marginLeft: ".5rem" }}
                            />
                            <Typography
                              component="span"
                              sx={{
                                width: {
                                  xs: "80%",
                                  sm: "calc(80% - 1rem)",
                                  md: "calc(100% - 3rem)",
                                  lg: "80%",
                                },
                              }}
                            >
                              تعداد بازدید : {item.view}
                            </Typography>
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Link>
                  </Card>
                  {
                    dataCategoriesItem.data_structure != null ? (
                      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dataCategoriesItem.data_structure) }} />
                    ) : null
                  }
                </section>
              )

            })
            }

          </Box>
        </Container>
      </Stack >

    </>
  );
}

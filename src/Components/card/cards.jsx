"use client";

import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

import Link from "next/link";

import { useApi } from "@/context/ApiContext";

export default function Cards({ typeCards  }) {
  const { dataCard, dataMostView, dataNewCards, dataTrainingCards } = useApi();

  // if (!dataCard.length) {
  //   return (
  //     <Box>
  //       <Skeleton animation="wave" variant="rectangular" width={210} height={118} />
  //     </Box>
  //   )
  // }

  return (
    <>
      {   typeCards === "training-items"
                ? dataTrainingCards.map((item) => {
                  return (
                    <Card
                      key={item.id}
                      component="article"
                      sx={{
                        maxWidth: "250px",
                        height: "100%",
                        background: "none",
                        boxShadow: "none",
                      }}
                    >
                      <Link
                        href={`${item.category.slug}${item.url}`}
                        title={item.title}
                      >
                        <CardActionArea component="div">
                          <picture>
                            <source srcSet={`https://vidbeen.ir/public/${item.poster}`} type="image/jpg" />
                            <img
                              src={`https://vidbeen.ir/public/${item.poster}`}
                              alt={item.title}
                              width={160}
                              height={90}
                            />
                          </picture>
                          <CardContent sx={{ padding: "0" }}>
                            <Typography
                              variant="p"
                              component="p"
                              sx={{
                                fontSize: "16px",
                                height: { xs: "45px", sm: "60px", md: "60px" },
                                textAlign: "justify",
                                color: "#111010",
                                margin: "10px auto",
                                fontWeight: "400",
                                lineHeight: "1.5",
                                padding: "0 10px",
                              }}
                            >
                              {item.title}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Link>
                    </Card>
                  );
                })
 
                   
                  
                  : /*typeCards === "product-next-videos"
                    ? ProductNextItems.map((productnextItem) => {
                      return (
                        <Card
                          key={productnextItem.id}
                          component="article"
                          variant="article"
                          sx={{ padding: "0 .5rem", margin: ".5rem 0" }}
                        >
                          <Link href={productnextItem.link}>
                            <CardActionArea component="section">
                              <picture>
                                <source srcSet={productnextItem.image} type="image/jpg" />
                                <img
                                  src={productnextItem.image}
                                  alt={productnextItem.alt}
                                />
                              </picture>

                              <CardContent sx={{ padding: 0 }}>
                                <Typography
                                  component="p"
                                  variant="p"
                                  sx={{ margin: ".5rem 0", textAlign: "justify" }}
                                >
                                  {productnextItem.description}
                                </Typography>
                              </CardContent>
                            </CardActionArea>
                          </Link>
                        </Card>
                      );
                    })
                    : typeCards === "related-videos"
                      ? RelatedVideos.map((relatedvideo) => {
                        return (
                          <Card
                            key={relatedvideo.id}
                            component="article"
                            variant="article"
                            sx={{ padding: "0 1.25rem", margin: ".5rem 0", width: { xs: '250px', sm: '250px', md: 'auto' } }}
                          >
                            <Link href={relatedvideo.link}>
                              <CardActionArea component="section">
                                <picture>
                                  <source srcSet={relatedvideo.image} type="image/jpg" />
                                  <img src={relatedvideo.image} alt={relatedvideo.alt} />
                                </picture>

                                <CardContent sx={{ padding: 0 }}>
                                  <Typography
                                    component="p"
                                    variant="p"
                                    sx={{
                                      margin: ".5rem 0",
                                      textAlign: "center",
                                      fontSize: "16px",
                                      fontWeight: "400",
                                      color: "#111010",
                                    }}
                                  >
                                    {relatedvideo.title}
                                  </Typography>
                                </CardContent>
                              </CardActionArea>
                            </Link>
                          </Card>
                        );
                      })
                      :*/ null}
    </>
  );
}

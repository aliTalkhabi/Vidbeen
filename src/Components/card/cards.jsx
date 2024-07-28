"use client";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Skeleton,
  Typography,
} from "@mui/material";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import {
  CategoryItems,
  NewVideosItems,
  ProductNextItems,
  RelatedVideos,
  TopCardsInfo,
  TrainingItems,
} from "@/constants/Constants";
import Link from "next/link";
import { QueryBuilderRounded } from "@mui/icons-material";
import dynamic from "next/dynamic";
import { useApi } from "@/context/ApiContext";


const CategoryIndexCards = dynamic(() => import("@mui/material/Card"), {
  ssr: false,
  loading: () => (
    <Skeleton
      variant="rectangular"
      animation="wave"
      width={531}
      height={363}
    />
  ),
});

const CardNewItemDynamic = dynamic(() => import("@mui/material/Card"), {
  ssr: false,
  loading: () => (
    <Skeleton
      variant="rectangular"
      animation="wave"
      width={211}
      height={175}
      sx={{ marginBottom: "1rem" }}
    />
  ),
});
const CardTrainingItem = dynamic(() => import("@mui/material/Card"), {
  ssr: false,
  loading: () => (
    <Skeleton
      variant="rectangular"
      animation="wave"
      width={165}
      height={170}
    />
  ),
});



export default function Cards({ typeCards }) {
  const {dataCard , dataMostView} = useApi(); 
  if(!dataCard.length){
    return(
      <Box>
        <Skeleton animation="wave" variant="rectangular" width={210} height={118} />
      </Box>
    )
  }
  return (
    <>
      {typeCards === "top-pages"
        ?  dataMostView.map((item) => {
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
              <Link href='/' title={item.title}>
                <CardActionArea component="section">
                  <picture>
                    <source srcSet={item.image} type="image/jpg" />
                    <img
                      src={item.image}
                      alt={item.title}
                      width={250}
                      height={140}
                    />
                  </picture>
                  <CardContent sx={{ padding: "0" }}>
                    <Typography
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
                    <Typography component="span" color="#00000080">
                      <VisibilityRoundedIcon
                        sx={{
                          float: "left",
                          marginRight: ".5rem",
                          marginLeft: ".5rem",
                        }}
                      />{" "}
                      تعداد بازدید : {'0'}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>
          );
        })
        : typeCards === "new-videos-item-mobile"
          ? NewVideosItems.map((newvideositem) => {
            return (
              <Card
                key={newvideositem.id}
                sx={{
                  maxWidth: { xs: "250px", sm: "350px", md: "100%" },
                  background: "none",
                  boxShadow: "none",
                  margin: "1rem 0",
                }}
                component="article"
              >
                <Link
                  href={newvideositem.link}
                  title={newvideositem.description}
                >
                  <CardActionArea component="div">
                    <picture>
                      <source srcSet={newvideositem.image} type="image/jpg" />
                      <img
                        src={newvideositem.image}
                        alt={newvideositem.alt}
                        width={250}
                        height={140}
                      />
                    </picture>

                    <CardContent sx={{ padding: "4px" }}>
                      <Typography
                        component="p"
                        sx={{
                          color: "#111010",
                          fontSize: "16px",
                          height: "45px",
                          lineHeight: "1.5",
                          margin: "10px auto",
                        }}
                      >
                        {newvideositem.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            );
          })
          : typeCards === "new-videos-item-desktop"
            ? NewVideosItems.map((newvideositem) => {
              return (
                <CardNewItemDynamic
                  key={newvideositem.id}
                  sx={{
                    maxWidth: { xs: "350px", sm: "250px", md: "100%" },
                    background: "none",
                    boxShadow: "none",
                    margin: "1rem 0",
                  }}
                  component="article"
                >
                  <Link
                    href={newvideositem.link}
                    title={newvideositem.description}
                  >
                    <CardActionArea component="div">
                      <picture>
                        <source srcSet={newvideositem.image} type="image/jpg" />
                        <img
                          src={newvideositem.image}
                          alt={newvideositem.alt}
                          width={250}
                          height={140}
                        />
                      </picture>
                      <CardContent sx={{ padding: "5px" }}>
                        <Typography
                          component="p"
                          width="210"
                          height="120"
                          sx={{
                            color: "#111010",
                            fontSize: "14px",
                            padding: ".5rem 0",
                            textAlign: "center",
                            borderBottom: "2px solid #E3E3E3",
                          }}
                        >
                          {newvideositem.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Link>
                </CardNewItemDynamic>
              );
            })
            : typeCards === "category-items"
              ? CategoryItems.map((categoryitem) => {
                return (
                  <div key={categoryitem.id} className="cards-area">
                    <h2>{categoryitem.title}</h2>
                    <CategoryIndexCards
                      sx={{
                        maxWidth: "100%",
                        background: "none",
                        boxShadow: "none",
                      }}
                      component="article"
                    >
                      <Link
                        key={categoryitem.id}
                        href={categoryitem.link}
                        title={categoryitem.description}
                      >
                        <CardActionArea component="section">
                          <picture>
                            <source srcSet={categoryitem.image} type="image/jpg" />
                            <img
                              src={categoryitem.image}
                              alt={categoryitem.alt}
                              width={530}
                              height={300}
                            />
                          </picture>

                          <CardContent component="section">
                            <Typography
                              component="p"
                              sx={{ color: "#111010", fontSize: "16px" }}
                            >
                              {categoryitem.description}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Link>
                    </CategoryIndexCards>
                  </div>
                );
              })

              : typeCards === "training-items"
                ? TrainingItems.map((trainingitems) => {
                  return (
                    <CardTrainingItem
                      key={trainingitems.id}
                      component="article"
                      sx={{
                        maxWidth: "250px",
                        height: "100%",
                        background: "none",
                        boxShadow: "none",
                      }}
                    >
                      <Link
                        href={trainingitems.link}
                        title={trainingitems.description}
                      >
                        <CardActionArea component="div">
                          <picture>
                            <source srcSet={trainingitems.image} type="image/jpg" />
                            <img
                              src={trainingitems.image}
                              alt={trainingitems.alt}
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
                              {trainingitems.description}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Link>
                    </CardTrainingItem>
                  );
                })
                : typeCards === "category-page-items"
                  ?
                  dataCard.map(item => {
                    return (
                      <Card key={item.id} variant="article" component="article" sx={{
                        maxWidth: "100%",
                        background: "none",
                        boxShadow: "none",
                        height: { lg: "350px" },
                      }}>
                        <Link href='/' title={item.title}>
                          <CardActionArea component='section'>
                            <picture>
                              <source srcSet={item.image} />
                              <img src={item.image} alt={item.title} width={160} height={90} style={{
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
                                  lg: "75px",
                                },
                                textAlign: "justify",
                                color: "#111010",
                                margin: "5px auto",
                                fontWeight: "400",
                                lineHeight: "1.5",
                                padding: "0 10px",
                              }}>
                                {item.title}
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
                                  تاریخ انتشار : {item.rating.rate}
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
                                  تعداد بازدید : {item.rating.rate}
                                </Typography>
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Link>
                      </Card>
                    )

                  }

                  )
                  : typeCards === "product-next-videos"
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
                      : null}
    </>
  );
}

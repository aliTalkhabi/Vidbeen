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
  ProductNextItems,
  RelatedVideos,
} from "@/constants/Constants";
import Link from "next/link";
import { QueryBuilderRounded } from "@mui/icons-material";
import { useApi } from "@/context/ApiContext";
import JalaliDate from "../JalaliDate/JalaliDate";
export default function Cards({ typeCards  }) {
  const ImageURL = process.env.NEXT_IMAGE_SOURCE;
  console.log(process.env.NEXT_IMAGE_SOURCE);
  const { dataCard, dataMostView, dataNewCards,dataTrainingCards,dataCardCategory  } = useApi();
  
  // if (!dataCard.length) {
  //   return (
  //     <Box>
  //       <Skeleton animation="wave" variant="rectangular" width={210} height={118} />
  //     </Box>
  //   )
  // }
   
  return (
    <>
       {typeCards === "top-pages"
        ? dataMostView.map((item) => {
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
              <Link href={`${item.category.slug}${item.url}`} title={item.title}>
                <CardActionArea component="section">
                  <picture>
                    <source srcSet={`${ImageURL}${item.poster}`} type="image/jpg" />
                    <img
                      src={`${ImageURL}${item.poster}`}
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
                      {item.main_name}
                    </Typography>
                    <Typography component="span" color="#00000080" sx={{fontSize:'16px',fontWeight:'400',lineHeight:'1.5',textAlign:'justify',margin:'10px auto'}}>
                      <VisibilityRoundedIcon
                        sx={{
                          float:'left',
                          marginRight: ".5rem",
                          marginLeft: ".5rem",
                        }}
                      />{" "}
                      تعداد بازدید : {item.view}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>
          );
        })
        :  typeCards === "new-videos-item-mobile"
          ? dataNewCards.map((item) => {
            return (
              <Card
                key={item.id}
                sx={{
                  maxWidth: { xs: "250px", sm: "350px", md: "100%" },
                  background: "none",
                  boxShadow: "none",
                  margin: "1rem 0",
                }}
                component="article"
              >
                <Link
                  href={'/'}
                  title={item.title}
                >
                  <CardActionArea component="div">
                    <picture>
                      <source srcSet={`${ImageURL}${item.poster}`} type="image/jpg" />
                      <img
                        src={`${ImageURL}${item.poster}`}
                        alt={item.title}
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
                        {item.main_name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            );
          })
          : typeCards === "new-videos-item-desktop"
            ? dataNewCards.map((item) => {
              return (
                <Card
                  key={item.id}
                  sx={{
                    maxWidth: { xs: "350px", sm: "250px", md: "100%" },
                    background: "none",
                    boxShadow: "none",
                    margin: "1rem 0",
                  }}
                  component="article"
                >
                  <Link
                    href={'/'}
                    title={item.title}
                  >
                    <CardActionArea component="div">
                      <picture>
                        <source srcSet={`${ImageURL}${item.poster}`} type="image/jpg" />
                        <img
                          src={`${ImageURL}${item.poster}`}
                          alt={item.title}
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
                          {item.main_name}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Link>
                </Card>
              );
            })
            : typeCards === "category-items"
              ? dataCard.map((item) => {
                return (
                  <div key={item.id} className="cards-area">
                    <h2>{item.title}</h2>
                    <Card
                      sx={{
                        maxWidth: "100%",
                        background: "none",
                        boxShadow: "none",
                      }}
                      component="article"
                    >
                      <Link
                        
                        href={'/'}
                        title={item.title}
                      >
                        <CardActionArea component="section">
                          <picture>
                            <source srcSet={`${ImageURL}${item.image}`} type="image/jpg" />
                            <img
                              src={`${ImageURL}${item.image}`}
                              alt={item.title}
                              width={530}
                              height={300}
                            />
                          </picture>

                          <CardContent component="section">
                            <Typography
                              component="p"
                              sx={{ color: "#111010", fontSize: "16px" }}
                            >
                              {item.description}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Link>
                    </Card>
                  </div>
                );
              })

              : typeCards === "training-items"
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
                        href={'/'}
                        title={item.title}
                      >
                        <CardActionArea component="div">
                          <picture>
                            <source srcSet={`${ImageURL}${item.poster}`} type="image/jpg" />
                            <img
                              src={`${ImageURL}${item.poster}`}
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
                :typeCards === "category-page-items"
                  ?
                  dataCardCategory.map(item => {
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
                              <source srcSet={`${ImageURL}${item.poster}`} />
                              <img src={`${ImageURL}${item.poster}`} alt={item.title} width={160} height={90} style={{
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
                    )

                  }

                  )
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

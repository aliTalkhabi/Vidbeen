'use client'
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import "./MainContent.css";
import Cards from "../Card/Cards";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
export default function MainContent() {
  const [newVideosData, setNewVideosData] = useState();
  const [mainBoxes ,setMainBoxes] = useState();
  const [trainingBox,setTrainingBox] = useState()
  const slug = `${process.env.NEXT_PUBLIC_BACKEND_URL}/home`;
  useEffect(() => {
    const getNewVideosData = async () => {
      await axios.get(slug).then(response => {
        setNewVideosData(response.data.newVideo);
      })
        .catch((error) => {
          console.log(error);
        });
    };
    const getBoxCategory = async () =>{
      await axios.get(slug).then(response=>{
        setMainBoxes(response.data.boxs)
      }).catch((error)=>{
        console.log(error);
      })
    }
    const getTrainingItem = async () =>{
      await axios.get(slug).then(response=>{
        setTrainingBox(response.data.tutorialVideo);      
      })
    }
    getNewVideosData();
    getBoxCategory();
    getTrainingItem();
  }, [slug])
  return (newVideosData && mainBoxes && trainingBox) ? (
    <Grid
      component="section"
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr", md: "2fr .75fr" },
        gridTemplateRows: "1fr",
        gap: "0em 1em",
        width: { xs: "93vw", sm: "100%" },
        padding: { xs: "0", sm: "0", md: '"0 2rem"' },
        margin: "1rem 0",
        height: '100%'
      }}
    >
      <Box
        component='section'
        sx={{
          display: { xs: "inherit", sm: "inherit", md: "none" },
          padding: { xs: "0 0.5rem" },
        }}
      >
        <div className="cards-area new-type">
          <h2>
            جدید ترین <span className="span">ویدیو ها</span>
          </h2>
        </div>

        <Box
          component='section'
          sx={{
            width: { xs: "100%", sm: "100%", md: "100%" },
            position: { xs: "unset", sm: "unset", md: "sticky" },
            top: { md: "50px" },
            overflowY: { xs: "hidden" },
          }}
        >
          <Box
            component='section'
            sx={{
              width: { xs: "max-content", sm: "max-content", md: "100%" },
              display: { xs: "grid", sm: "grid", md: "inherit" },
              gridTemplateColumns: { xs: "repeat(6,1fr)" },
              gap: { xs: "20px" },
            }}
          >
            {
              newVideosData.map(item => {
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
                      href={`${item.category.slug}/${item.url}`}
                      title={item.title}
                    >
                      <CardActionArea component="div">
                        <picture>
                          <source srcSet={`https://vidbeen.ir/public/${item.poster}`} type="image/jpg" />
                          <img
                            src={`https://vidbeen.ir/public/${item.poster}`}
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
            }
          </Box>
        </Box>
      </Box>
      <Box
        component='section'
        sx={{
          padding: ".5rem",
          paddingTop: "0",
          position: { sx: "unset", xs: "unset", md: "sticky" },
          top: "50px",
          height: "fit-content",
          display: { xs: "grid", sm: "grid", md: "inherit" },
        }}
      >
        {/* <Cards typeCards="category-items" /> */
          mainBoxes.map(item=>{
            return (
              <section key={item.id} className="cards-area">
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
                    href={`${item.link}`}
                    title={item.title}
                  >
                    <CardActionArea component="section">
                      <picture>
                        <source srcSet={`https://vidbeen.ir/public/${item.image}`} type="image/jpg" />
                        <img
                          src={`https://vidbeen.ir/public/${item.image}`}
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
              </section>
            );
          })
        }
      
        <Box component='section' sx={{ width: "100%", overflowY: "hidden" }}>
          <div className="cards-area">
            <h2>آموزشی</h2>
          </div>
          <Box
            component='section'
            sx={{
              padding: { xs: "0 0", sm: "0 0", md: "0 2rem" },
              overflowY: { xs: "hidden", sm: "hidden", md: "unset" },
            }}
          >
            <Box
              component='section'
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px",
                width: { xs: "max-content", sm: "max-content", md: "100%" },
              }}
            >
              {/* <Cards typeCards="training-items" /> */
                trainingBox.map(item=>{
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
                        href={`${item.category.slug}/${item.url}`}
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
              }
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        component='section'
        sx={{
          display: { xs: "none", sm: "none", md: "inline-block" },
          height: "100%",
        }}
      >
        <div className="cards-area new-type">
          <h2>
            جدید ترین <span className="span">ویدیو ها</span>
          </h2>
        </div>

        <Box
          component='section'
          sx={{
            background: "#F5F4F9",
            borderRadius: "10px",
            border: "1px solid #0000001a",
            boxShadow: "0 0 4px #00000040",
            padding: "30px .5rem",
            width: { md: "100%" },
            position: { xs: "unset", sm: "unset", md: "sticky" },
            top: { md: "0px" },
            overflowY: { xs: "hidden" },
          }}
        >
          <Box
            component='section'
            sx={{
              width: { xs: "max-content", sm: "100%" },
              gridTemplateColumns: { xs: "repeat(5,1fr)" },
              gap: { xs: "20px" },
            }}
          >
            {
              newVideosData.map(item => {
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
                      href={`${item.category.slug}/${item.url}`}
                      title={item.title}
                    >
                      <CardActionArea component="div">
                        <picture>
                          <source srcSet={`https://vidbeen.ir/public/${item.poster}`} type="image/jpg" />
                          <img
                            src={`https://vidbeen.ir/public/${item.poster}`}
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
            }
          </Box>
        </Box>
      </Box>
    </Grid>

  ):null;
}

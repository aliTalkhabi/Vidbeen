'use client'
import { Box, Card, CardActionArea, CardContent, Grid, Skeleton, Typography } from "@mui/material";
import styles from "./MostView.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";


export default function TopCard() {
  const [mostViewData, setMostViewData] = useState();
  const slug = `${process.env.NEXT_PUBLIC_BACKEND_URL}/home`;
  useEffect(() => {
    const getData = async () => {
      await axios
        .get(slug)
        .then((response) => {
          const result = response.data.viewed;
          setMostViewData(result);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getData();
  }, [slug]);


  return mostViewData && (
    <Grid
      container
      component='section'
      wrap="wrap"
      sx={{ display: 'grid' }}
    >
      <Typography
        className={styles.topparagraph}
        component='h2'
        sx={{
          width: "100%",
          padding: { md: "0 2rem", sm: "0" },
          color: "#1B2CC1",
          fontWeight: "900",
        }}
      >
        پربازدیدترین <span className={styles.span}>ویدیو ها</span>{" "}
      </Typography>
      <Box
        component='section'
        sx={{
          width: { xs: "100%", sm: "100%", md: "100%" },
          overflowY: { xs: "hidden" },
        }}
      >
        <Box
          component='section'
          sx={{
            display: "grid",
            width: { xs: "max-content", sm: "100%", md: "100%" },
            gridTemplateColumns: "repeat(3,1fr)",
            padding: { xs: "0 .5rem", sm: "0rem", md: "0 2rem" },
            gap: "20px",
          }}
        >
          {
            mostViewData.map(item => {
              return (
                <>
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
                    <Link href={`${item.category.slug}/${item.url}`} title={item.title}>
                      <CardActionArea component="section">
                        <picture>
                          <source srcSet={`https://vidbeen.ir/public/${item.poster}`} type="image/jpg" />
                          <img
                            src={`https://vidbeen.ir/public/${item.poster}`}
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
                          <Typography component="span" color="#00000080" sx={{ fontSize: '16px', fontWeight: '400', lineHeight: '1.5', textAlign: 'justify', margin: '10px auto' }}>
                            <VisibilityRoundedIcon
                              sx={{
                                float: 'left',
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
                  {
                    mostViewData.data_structure != null ? (
                      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(mostViewData.data_structure) }} />
                    ) : null
                  }
                </>
              );
            })
          }

        </Box>
      </Box>
    </Grid>
  );
}

"use client";
import { Box, Card, CardActionArea, CardContent, Container, Skeleton, Stack, Typography } from "@mui/material";
import styles from './Product.module.css'
import { CldVideoPlayer, getCldImageUrl } from "next-cloudinary";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import "next-cloudinary/dist/cld-video-player.css";
import dynamic from "next/dynamic";
import ActionProducts from "../ActionsProduct/ActionsProduct";
import Link from "next/link";
import { lazy, Suspense, useCallback, useState } from "react";
import { usePathname } from "next/navigation";

const TypographyDynamic = dynamic(() => import("@mui/material/Typography"), {
  ssr: false,
  loading: () => <Skeleton variant="rectangular" animation="wave" />,
});
const NextBoxDynamic = dynamic(() => import("@mui/material/Box"), {
  ssr: false,
  loading: () => (
    <Skeleton
      variant="rectangular"
      animation="wave"
      sx={{ height: "750px", width: "186px" }}
    />
  ),
});
const IconsBoxDynamic = dynamic(() => import("@mui/material/Box"), {
  ssr: false,
  loading: () => (
    <Skeleton
      variant="rectangular"
      animation="wave"
      sx={{
        margin: "1rem 0",
        height: "90px",
      }}
    />
  ),
});
const VideoBoxDynamic = dynamic(() => import("@mui/material/Box"), {
  ssr: false,
  loading: () => (
    <Skeleton
      variant="rectangular"
      animation="wave"
      sx={{ width: "934px", height: "514px" }}
    />
  ),
});

const RealatedBoxDynamic = dynamic(() => import("@mui/material/Box"), {
  ssr: false,
  loading: () => <Skeleton variant="rectangular" animation="wave" />,
});




export default function Product({ data }) {
  const dataProductItem = data.video;
  const nextVideoItem = data.videoNext;
  const relatedVideoItem = data.videoRelation;
  const shareUrl = `https://vidbeen.ir/${usePathname()}`;
  const [isShareModalOpen, setShareModalOpen] = useState(false);
  const ShareModal = lazy(() => import('../ActionsProduct/share/Share'))
  const handleOpenModal = useCallback(() => {
    setShareModalOpen(true);
  }, [])

  const handleCloseModal = useCallback(() => {
    setShareModalOpen(false);
  }, [])
 
  return (dataProductItem && nextVideoItem && relatedVideoItem) ? (
    <>
      <Container component="section">
        <Stack
          component="section"
          spacing={2}
          sx={{
            display: "grid",
            gridTemplateAreas: ". .",
            gridTemplateColumns: { xs: "1fr", md: "2.5fr .5fr" },
            gap: "1em",
            padding: { xs: "0 .5rem", sm: "0 .5rem" },
          }}
        >
          <Box
            component="section"
            sx={{ overflowY: { xs: "hidden", sm: "hidden", md: "unset" } }}
          >
            <TypographyDynamic
              component="h1"
              sx={{
                color: "#000",
                margin: "1rem 1.5rem",
                marginLeft: { xs: "0", sm: "0" },
                fontSize: "1.5rem",
              }}
            >
              {dataProductItem.title}
            </TypographyDynamic>
            <Box component="section">
              <VideoBoxDynamic>
                <CldVideoPlayer
                  id={dataProductItem.id}
                  src={dataProductItem.video.original}
                  // poster={getCldImageUrl({ src: `${dataProductItem.poster}` })}
                  width="1960"
                  height="1080"
                  pictureInPictureToggle
                  colors={{
                    accent: "#04abdd",
                    base: "#00000066",
                    text: "#04abdd",
                  }}
                />
              </VideoBoxDynamic>
              <IconsBoxDynamic
                component="section"
                sx={{
                  display: "flex",
                  justifyContent: "right",
                  padding: "1rem 0",
                  margin: "1rem 0",
                }}
              >
                <Box
                  component="div"
                  sx={{
                    display: "inline-flex",
                    flexWrap: "nowrap",
                    alignItems: "center",
                    margin: "0 .5rem",
                  }}
                >
                  <SaveAltIcon
                    sx={{
                      color: { xs: "#B6B3C2", sm: "#B6B3C2", md: "#150578" },
                      fontSize: "28px",
                      marginRight: ".5rem",
                    }}
                  />
                  <Typography
                    component="p"
                    sx={{ display: { xs: "none", sm: "none", md: "block" } }}
                  >
                    کپی کردن
                  </Typography>
                </Box>
                <Box
                  component="div"
                  sx={{
                    display: "inline-flex",
                    flexWrap: "nowrap",
                    alignItems: "center",
                    margin: "0 .5rem",
                  }}
                  onClick={handleOpenModal}
                >
                  <ShareOutlinedIcon
                    sx={{
                      color: { xs: "#B6B3C2", sm: "#B6B3C2", md: "#150578" },
                      fontSize: "28px",
                      marginRight: ".5rem",
                    }}
                  />
                  <Typography
                    component="p"
                    sx={{ display: { xs: "none", sm: "none", md: "block" } }}
                  >
                    اشتراک گذاری
                  </Typography>
                  <Suspense fallback={<div>صبر کنید...</div>}>
                    {
                      isShareModalOpen && (
                        <ShareModal isOpen={isShareModalOpen} onClose={handleCloseModal} shareUrl={shareUrl} />
                      )
                    }
                  </Suspense>

                </Box>
                <ActionProducts data={data} />
              </IconsBoxDynamic>
            </Box>

            <Box component="section" className={styles.description} sx={{ background: '#F5F4F9', margin: '25px auto', padding: '1.5rem 2rem', borderRadius: '5px', boxShadow: '0 0 4px #00000040' }} dangerouslySetInnerHTML={{ __html: dataProductItem.body }}>
            </Box>
            <Box component="section">
              <TypographyDynamic
                component="p"
                sx={{
                  gridColumn: "3",
                  gridArea: "1 / 4 / 1 / 1",
                  fontSize: "18px",
                  color: "#434343",
                  fontWeight: "600",
                  paddingLeft: { xs: "0", sx: "0", md: "1.5rem" },
                }}
              >
                ویدیو های مرتبط
              </TypographyDynamic>
              <Box
                component="section"
                sx={{ width: "100%", overflowY: "hidden" }}
              >
                <RealatedBoxDynamic
                  component="section"
                  sx={{
                    width: { xs: "max-content", sm: "max-content", md: "100%" },
                    display: { xs: "inline-grid" },
                    gridTemplateColumns: "repeat(3,1fr)",
                  }}
                >
                  {
                    relatedVideoItem.map(item => {
                      return (
                        <section key={item.id}>
                          <Card
                            component="article"
                            variant="article"
                            sx={{ padding: "0 1.25rem", margin: ".5rem 0", width: { xs: '250px', sm: '250px', md: 'auto' } }}
                          >
                            <Link href={item.url}>
                              <CardActionArea component="section">
                                <picture>
                                  <source srcSet={`https://vidbeen.ir/public/${item.poster}`} type="image/jpg" />
                                  <img src={`https://vidbeen.ir/public/${item.poster}`} alt={item.description} />
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
                                    {item.main_name}
                                  </Typography>
                                </CardContent>
                              </CardActionArea>
                            </Link>
                          </Card>
                          {
                            relatedVideoItem.data_structure != null ? (
                              <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(relatedVideoItem.data_structure) }} />
                            ) : null
                          }
                        </section>
                      );
                    })
                  }
                </RealatedBoxDynamic>
              </Box>
            </Box>
          </Box>
          <Box
            component="section"
            sx={{ display: { xs: "none", sm: "none", md: "block" } }}
          >
            <TypographyDynamic
              component="p"
              sx={{
                color: "#555555",
                fontSize: "16px",
                fontWeight: "600",
                margin: "1rem 0",
              }}
            >
              ویدیو های بعدی
            </TypographyDynamic>
            <NextBoxDynamic
              component="section"
              sx={{ position: "sticky", top: "0%" }}
            >
              {
                nextVideoItem.map(item => {
                  return (
                    <section key={item.id}>
                      <Card
                        component="article"
                        variant="article"
                        sx={{ padding: "0 .5rem", margin: ".5rem 0" }}
                      >
                        <Link href={item.url}>
                          <CardActionArea component="section">
                            <picture>
                              <source srcSet={`https://vidbeen.ir/public/${item.poster}`} type="image/jpg" />
                              <img
                                src={`https://vidbeen.ir/public/${item.poster}`}
                                alt={item.description}
                              />
                            </picture>

                            <CardContent sx={{ padding: 0 }}>
                              <Typography
                                component="p"
                                variant="p"
                                sx={{ margin: ".5rem 0", textAlign: "justify", padding: '0 .25rem' }}
                              >
                                {item.main_name}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Link>
                      </Card>
                      {
                        nextVideoItem.data_structure != null ? (
                          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(nextVideoItem.data_structure) }} />
                        ) : null
                      }
                    </section>

                  );
                })
              }

            </NextBoxDynamic>
          </Box>
        </Stack>
      </Container>
      {
        dataProductItem.data_structure != null ? (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dataProductItem.data_structure) }} />
        ) : null
      }
    </>
  ) : null;
}

"use client";
import { Box, Container, Skeleton, Stack, Typography } from "@mui/material";
import React from "react";
import { CldVideoPlayer } from "next-cloudinary";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import "next-cloudinary/dist/cld-video-player.css";
import Cards from "../card/Cards";
import dynamic from "next/dynamic";
import ActionProducts from "../actionsproduct/ActionsProduct";

export default function Product() {
  

  // const [liked, setLiked] = useState(false);
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
  const DescriptionBoxDynamic = dynamic(
    () => import("../descriptionbox/Descriptionbox"),
    {
      ssr: false,
      loading: () => (
        <Skeleton
          variant="rectangular"
          animation="wave"
          sx={{ height: "1000px" }}
        />
      ),
    }
  );
  const RealatedBoxDynamic = dynamic(() => import("@mui/material/Box"), {
    ssr: false,
    loading: () => <Skeleton variant="rectangular" animation="wave" />,
  });

  return (
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
              نام محصول
            </TypographyDynamic>
            <Box component="section">
              <VideoBoxDynamic>
                <CldVideoPlayer
                  id="videoplayer-1"
                  src="https://upload.vidbeen.ir/videos/video-door-phone/taba/taba-vdp-1043.mp4"
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
                </Box>
               
                <ActionProducts />
              </IconsBoxDynamic>
            </Box>
            <DescriptionBoxDynamic />
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
                  <Cards typeCards="related-videos" />
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
              <Cards typeCards="product-next-videos" />
            </NextBoxDynamic>
          </Box>
        </Stack>
      </Container>
    </>
  );
}

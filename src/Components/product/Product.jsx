"use client";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { CldVideoPlayer } from "next-cloudinary";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import "next-cloudinary/dist/cld-video-player.css";
import Cards from "../card/Cards";
import Descriptionbox from "../descriptionbox/Descriptionbox";

export default function Product() {
  return (
    <>
      <Container
        component="section"
        sx={{
          border: "1px solid black",
          display: "grid",
          gridTemplateAreas: ". .",
          gridTemplateColumns: "2.5fr .5fr",
          gap: "1em",
        }}
      >
        <Box component="section" sx={{ border: "1px solid red" }}>
          <Typography
            component="h1"
            sx={{ color: "#000", margin: "1rem 1.5rem", fontSize: "1.5rem" }}
          >
            نام محصول
          </Typography>
          <Box component="section">
            <CldVideoPlayer
              id="videoplayer-1"
              src="https://upload.vidbeen.ir/videos/video-door-phone/taba/taba-vdp-1043.mp4"
              poster="https://vidbeen.ir/public/images/poster/2024/03/tvd-1043I.jpg"
              width="1960"
              height="1080"
              pictureInPictureToggle
              colors={{
                accent: "#04abdd",
                base: "#00000066",
                text: "#04abdd",
              }}
            />
            <Box
              component="section"
              sx={{
                border: "1px solid blue",
                display: "flex",
                justifyContent: "right",
                margin: "1rem 0",
                padding: "1rem 0",
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
                    color: "#150578",
                    fontSize: "28px",
                    marginRight: ".5rem",
                  }}
                />
                <Typography component="p">کپی کردن</Typography>
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
                    color: "#150578",
                    fontSize: "28px",
                    marginRight: ".5rem",
                  }}
                />
                <Typography component="p">اشتراک گذاری</Typography>
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
                <ThumbDownAltOutlinedIcon
                  sx={{
                    color: "#150578",
                    fontSize: "28px",
                    marginRight: ".5rem",
                  }}
                />
                <Typography component="p">دوست نداشتم 0</Typography>
              </Box>
              <Box
                component="div"
                sx={{
                  display: "inline-flex",
                  flexWrap: "nowrap",
                  alignItems: "center",
                  margin: "0 .5rem",
                  marginRight: "0",
                }}
              >
                <ThumbUpOutlinedIcon
                  sx={{
                    color: "#150578",
                    fontSize: "28px",
                    marginRight: ".5rem",
                  }}
                />
                <Typography component="p">دوست داشتم 0</Typography>
              </Box>
            </Box>

          </Box>
          <Descriptionbox />
          <Box component="section" sx={{display:'grid',gridTemplateColumns:'repeat(3,1fr)'}}>
              <Typography component='p' sx={{gridColumn:'3',gridArea:'1 / 4 / 1 / 1',fontSize:'18px',color:'#434343',fontWeight:'600'}}>ویدیو های مرتبط</Typography>
              <Cards typeCards='related-videos' />
          </Box>
        </Box>
        <Box component="section">
          <Typography
            component="p"
            sx={{
              color: "#555555",
              fontSize: "16px",
              fontWeight: "600",
              margin: "1rem 0",
            }}
          >
            ویدیو های بعدی
          </Typography>
          <Box component="section" sx={{ position: "sticky", top: "0%"}}>
            <Cards typeCards="product-next-videos" />
          </Box>
        </Box>
      </Container>
    </>
  );
}

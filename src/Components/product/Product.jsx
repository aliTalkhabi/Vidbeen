"use client";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

export default function Product() {
  return (
    <>
      <Container
        component="section"
        sx={{
          border: "1px solid black",
          display: "grid",
          gridTemplateAreas: ". .",
          gridTemplateColumns: "1.5fr .5fr",
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
          <Box component="section" sx={{ border: "1px solid blue" }}>
            <CldVideoPlayer
              id="videoplayer-1"
              src="https://upload.vidbeen.ir/videos/video-door-phone/taba/taba-vdp-1043.mp4"
              poster="https://vidbeen.ir/public/images/poster/2024/03/tvd-1043I.jpg"
              width="1960"
              height="1080"
              pictureInPictureToggle
              colors={{
                accent: '#04abdd',
                base: '#00000066',
                text: '#04abdd'
              }}

            />
          </Box>
        </Box>
        <Box component="section" sx={{ border: "1px solid green" }}>
          <Typography
            component="p"
            sx={{
              color: "#555555",
              fontSize: "16px",
              fontWeight: "600",
              margin: "1rem 1.5rem",
            }}
          >
            ویدیو های بعدی
          </Typography>
        </Box>
      </Container>
    </>
  );
}

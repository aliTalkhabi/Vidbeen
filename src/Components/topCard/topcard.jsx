'use client'
import { Box, Grid, Typography } from "@mui/material";
import Cards from "../card/Cards";
import "./topcard.css";

export default function TopCard() {
  return (
    <Grid
      container
      component='section'
      wrap="wrap"
      sx={{ display:'grid' }}
    >
      <Typography
        className="topparagraph"
        component='h2'
        sx={{
          width: "100%",
          padding: { md: "0 2rem", sm: "0" },
          color: "#1B2CC1",
          fontWeight: "900",
        }}
      >
        پربازدیدترین <span className="span">ویدیو ها</span>{" "}
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
          <Cards typeCards='top-pages' />
        </Box>
      </Box>
    </Grid>
  );
}

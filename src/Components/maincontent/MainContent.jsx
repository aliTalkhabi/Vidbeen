import { CategoryItems, NewVideosItems } from "@/constants/Constants";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";
import "./MainContent.css";
import StickyBox from "react-sticky-box";
import Cards from "../card/Cards";

export default function MainContent() {
  return (
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
              gridTemplateColumns: { xs: "repeat(5,1fr)" },
              gap: { xs: "20px" },
            }}
          >
            <Cards typeCards="new-videos-item-mobile" />
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
        <Cards typeCards="category-items" />
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
              <Cards typeCards="training-items" />
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
            <Cards typeCards="new-videos-item-desktop" />
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}

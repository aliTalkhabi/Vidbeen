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
        sx={{
          
          display: { xs: "inherit", sm: "inherit", md: "none" },
          padding: { xs: "0 0.5rem" },
        }}
      >
        <div className="cards-area new-type">
          <span>
            جدید ترین <span className="span">ویدیو ها</span>
          </span>
        </div>

        <Box
          sx={{
    
            width: { xs: "100%", sm: "100%", md: "100%" },
            position: { xs: "unset", sm: "unset", md: "sticky" },
            top: { md: "50px" },
            overflowY: { xs: "hidden" },
          }}
        >
          <Box
            sx={{
              
              width: { xs: "max-content", sm: "max-content", md: "100%" },
              display: { xs: "grid", sm: "grid", md: "inherit" },
              gridTemplateColumns: { xs: "repeat(5,1fr)" },
              gap: { xs: "20px" },
            }}
          >
            <Cards typeCards='new-videos-item-mobile'/>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          padding: ".5rem",
          position: { sx: "unset", xs: "unset", md: "sticky" },
          top: "50px",
          height: "fit-content",
        }}
      >
        <Cards typeCards='category-items' />
      </Box>
      <Box
        sx={{
          display: { xs: "none", sm: "none", md: "inline-block" },
          height: "100%",
        }}
      >
        <div className="cards-area new-type">
          <span>
            جدید ترین <span className="span">ویدیو ها</span>
          </span>
        </div>

        <Box
          sx={{
            background:'#F5F4F9',
            borderRadius:'10px',
            border:'1px solid #0000001a',
            boxShadow:'0 0 4px #00000040',
            padding:'30px .5rem',
            width: { md: "100%" },
            position: { xs: "unset", sm: "unset", md: "sticky" },
            top: { md: "0px" },
            overflowY: { xs: "hidden" },
          }}
        >
          <Box
            sx={{
              
              width: { xs: "max-content", sm: "100%" },
              gridTemplateColumns: { xs: "repeat(5,1fr)" },
              gap: { xs: "20px" },
            }}
          >
            <Cards typeCards='new-videos-item-desktop' />
            
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}

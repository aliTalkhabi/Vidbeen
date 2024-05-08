import { CategoryItems } from "@/constants/Constants";
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

export default function MainContent() {
  return (
    <Grid
      sx={{
        display: "grid",
        gridTemplateColumns: "2fr .5fr",
        gridTemplateRows: "1fr",
        gap: "0em 1em",
        width: "100%",
        padding: "0 2rem",
      }}
    >
      <Box sx={{ border: "1px solid blue" }}>
        {CategoryItems.map((categoryitem) => {
          return (
            <div key={categoryitem.id} className="cards-area">
              <span>{categoryitem.title}</span>
              <Link key={categoryitem.id} href={categoryitem.link}>
                <Card
                  sx={{
                    maxWidth: "100%",
                    background: "none",
                    boxShadow: "none",
                  }}
                  component="article"
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image={categoryitem.image}
                      alt={categoryitem.description}
                      sx={{ borderRadius: ".25rem" }}
                    />
                    <CardContent>
                      <Typography component="p" sx={{ color: "#111010" }}>
                        {categoryitem.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </div>
          );
        })}
      </Box>
      <Box sx={{ border: "1px solid red", padding: "1rem" }}>
        <StickyBox>
          <Box sx={{border:'1pxx solid green'}}>

          </Box>
        </StickyBox>
      </Box>
    </Grid>
  );
}

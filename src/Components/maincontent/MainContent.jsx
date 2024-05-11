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

export default function MainContent() {
  return (
    <Grid
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr", md: "2fr .5fr" },
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
            {NewVideosItems.map((newvideositem) => {
              return (
                <Link key={newvideositem.id} href={newvideositem.link}>
                  <Card
                    sx={{
                      maxWidth: { xs: "250px", sm: "350px", md: "100%" },
                      background: "none",
                      boxShadow: "none",
                      margin: "1rem 0",
                    }}
                    component="article"
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="auto"
                        image={newvideositem.image}
                        alt={newvideositem.description}
                        sx={{ borderRadius: ".25rem" }}
                      />
                      <CardContent sx={{ padding: "4px" }}>
                        <Typography
                          component="p"
                          sx={{ color: "#111010", fontSize: "16px",height:'45px',lineHeight:'1.5',margin:'10px auto' }}
                        >
                          {newvideositem.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              );
            })}
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
                      height="auto"
                      image={categoryitem.image}
                      alt={categoryitem.description}
                      sx={{ borderRadius: ".25rem", width: { xs: "100%" } }}
                    />
                    <CardContent>
                      <Typography component="p" sx={{ color: "#111010",fontSize:'16px' }}>
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
            {NewVideosItems.map((newvideositem) => {
              return (
                <Link key={newvideositem.id} href={newvideositem.link}>
                  <Card
                    sx={{
                      maxWidth: { xs: "350px", sm: "250px", md: "100%" },
                      background: "none",
                      boxShadow: "none",
                      margin: "1rem 0",
                    }}
                    component="article"
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="auto"
                        image={newvideositem.image}
                        alt={newvideositem.description}
                        sx={{ borderRadius: ".25rem" }}
                      />
                      <CardContent sx={{ padding: "4px" }}>
                        <Typography
                          component="p"
                          sx={{ color: "#111010", fontSize: "12px" }}
                        >
                          {newvideositem.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}

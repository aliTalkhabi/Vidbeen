import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import {
  CategoryItems,
  NewVideosItems,
  TopCardsInfo,
} from "@/constants/Constants";
import Link from "next/link";
import { Padding } from "@mui/icons-material";

export default function Cards({typeCards}) {
  return (
    <>
      {typeCards === "top-pages"
        ? 
        TopCardsInfo.map((topcardinfo) => {
            return (
              <Link key={topcardinfo.id} href={topcardinfo.link}>
                <Card
                  component="article"
                  sx={{
                    maxWidth: "250px",
                    height: "100%",
                    background: "none",
                    boxShadow: "none",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="auto"
                      image={topcardinfo.image}
                      alt={topcardinfo.title}
                      sx={{ borderRadius: ".25rem" }}
                    />
                    <CardContent sx={{ padding: "0" }}>
                      <Typography
                        variant="p"
                        component="div"
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
                        {topcardinfo.title}
                      </Typography>
                      <Typography variant="span" color="#00000080">
                        <VisibilityRoundedIcon
                          sx={{
                            float: "left",
                            marginRight: ".5rem",
                            marginLeft: ".5rem",
                          }}
                        />{" "}
                        تعداد بازدید : {topcardinfo.view}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            );
          })
        : typeCards === "new-videos-item-mobile"
        ? NewVideosItems.map((newvideositem) => {
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
                        sx={{
                          color: "#111010",
                          fontSize: "16px",
                          height: "45px",
                          lineHeight: "1.5",
                          margin: "10px auto",
                        }}
                      >
                        {newvideositem.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            );
          })
        : typeCards === "new-videos-item-desktop"
        ? NewVideosItems.map((newvideositem) => {
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
                    <CardContent sx={{ padding: "5px" }}>
                      <Typography
                        component="p"
                        sx={{ color: "#111010", fontSize: "14px",padding:'.5rem 0',textAlign:'center',borderBottom:'2px solid #E3E3E3' }}
                      >
                        {newvideositem.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            );
          })
        : typeCards === "category-items"
        ? CategoryItems.map((categoryitem) => {
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
                        <Typography
                          component="p"
                          sx={{ color: "#111010", fontSize: "16px" }}
                        >
                          {categoryitem.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </div>
            );
          })
        : null}
    </>
  );
}

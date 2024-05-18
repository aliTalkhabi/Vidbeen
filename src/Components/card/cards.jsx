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
  TrainingItems,
} from "@/constants/Constants";
import Link from "next/link";
import { Padding } from "@mui/icons-material";

export default function Cards({ typeCards }) {
  return (
    <>
      {typeCards === "top-pages"
        ? TopCardsInfo.map((topcardinfo) => {
            return (
              <Card
                key={topcardinfo.id}
                component="article"
                sx={{
                  maxWidth: "250px",
                  height: "100%",
                  background: "none",
                  boxShadow: "none",
                }}
              >
                <Link href={topcardinfo.link}>
                  <CardActionArea component="div">
                    <picture>
                      <source srcSet={topcardinfo.image} type="image/jpg" />
                      <img
                        src={topcardinfo.image}
                        alt={topcardinfo.alt}
                        width={250}
                        height={140}
                      />
                    </picture>
                    <CardContent sx={{ padding: "0" }}>
                      <Typography
                        component="p"
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
                      <Typography component="span" color="#00000080">
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
                </Link>
              </Card>
            );
          })
        : typeCards === "new-videos-item-mobile"
        ? NewVideosItems.map((newvideositem) => {
            return (
              <Card
                key={newvideositem.id}
                sx={{
                  maxWidth: { xs: "250px", sm: "350px", md: "100%" },
                  background: "none",
                  boxShadow: "none",
                  margin: "1rem 0",
                }}
                component="article"
              >
                <Link href={newvideositem.link}>
                  <CardActionArea component="div">
                    <picture>
                      <source srcSet={newvideositem.image} type="image/jpg" />
                      <img
                        src={newvideositem.image}
                        alt={newvideositem.alt}
                        width={250}
                        height={140}
                      />
                    </picture>

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
                </Link>
              </Card>
            );
          })
        : typeCards === "new-videos-item-desktop"
        ? NewVideosItems.map((newvideositem) => {
            return (
              <Card
                key={newvideositem.id}
                sx={{
                  maxWidth: { xs: "350px", sm: "250px", md: "100%" },
                  background: "none",
                  boxShadow: "none",
                  margin: "1rem 0",
                }}
                component="article"
              >
                <Link href={newvideositem.link}>
                  <CardActionArea component="div">
                    <picture>
                      <source srcSet={newvideositem.image} type="image/jpg" />
                      <img
                        src={newvideositem.image}
                        alt={newvideositem.alt}
                        width={250}
                        height={140}
                      />
                    </picture>
                    <CardContent sx={{ padding: "5px" }}>
                      <Typography
                        component="p"
                        width="210"
                        height="120"
                        sx={{
                          color: "#111010",
                          fontSize: "14px",
                          padding: ".5rem 0",
                          textAlign: "center",
                          borderBottom: "2px solid #E3E3E3",
                        }}
                      >
                        {newvideositem.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            );
          })
        : typeCards === "category-items"
        ? CategoryItems.map((categoryitem) => {
            return (
              <div key={categoryitem.id} className="cards-area">
                <h2>{categoryitem.title}</h2>

                <Card
                  sx={{
                    maxWidth: "100%",
                    background: "none",
                    boxShadow: "none",
                  }}
                  component="article"
                >
                  <Link key={categoryitem.id} href={categoryitem.link}>
                    <CardActionArea component="div">
                    <picture>
                      <source srcSet={categoryitem.image} type="image/jpg" />
                      <img
                        src={categoryitem.image}
                        alt={categoryitem.alt}
                        width={530}
                        height={300}
                      />
                    </picture>
                     
                      <CardContent component="div">
                        <Typography
                          component="p"
                          sx={{ color: "#111010", fontSize: "16px" }}
                        >
                          {categoryitem.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Link>
                </Card>
              </div>
            );
          })
        : typeCards === "training-items"
        ? TrainingItems.map((trainingitems) => {
            return (
              <Card
                key={trainingitems.id}
                component="article"
                sx={{
                  maxWidth: "250px",
                  height: "100%",
                  background: "none",
                  boxShadow: "none",
                }}
              >
                <Link href={trainingitems.link}>
                  <CardActionArea component="div">
                  <picture>
                      <source srcSet={trainingitems.image} type="image/jpg" />
                      <img
                        src={trainingitems.image}
                        alt={trainingitems.alt}
                        width={160}
                        height={90}
                      />
                       
                    </picture>
                    <CardContent sx={{ padding: "0" }}>
                      <Typography
                        variant="p"
                        component="p"
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
                        {trainingitems.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            );
          })
        : null}
    </>
  );
}

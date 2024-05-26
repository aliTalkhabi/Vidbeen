"use client";
import {
  Card,
  CardActionArea,
  CardContent,
  Skeleton,
  Typography,
} from "@mui/material";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import {
  CategoriesItemCard,
  CategoryItems,
  NewVideosItems,
  TopCardsInfo,
  TrainingItems,
} from "@/constants/Constants";
import Link from "next/link";
import dynamic from "next/dynamic";
import "./Card.css";
import { QueryBuilderRounded } from "@mui/icons-material";
const TopCardDynamic = dynamic(() => import("@mui/material/Card"), {
  ssr: false,
  loading: () => <Skeleton variant="rectangular" width="100%" height="100%" />,
});
const CardActionAreaDynamic = dynamic(
  () => import("@mui/material/CardActionArea"),
  {
    ssr: false,
    loading: () => (
      <Skeleton variant="rectangular" width="100%" height="100%" />
    ),
  }
);

export default function Cards({ typeCards }) {
  return (
    <>
      {typeCards === "top-pages"
        ? TopCardsInfo.map((topcardinfo) => {
            return (
              <TopCardDynamic
                key={topcardinfo.id}
                component="article"
                sx={{
                  maxWidth: "250px",
                  height: "100%",
                  background: "none",
                  boxShadow: "none",
                }}
              >
                <Link href={topcardinfo.link} title={topcardinfo.title}>
                  <CardActionAreaDynamic component="div">
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
                  </CardActionAreaDynamic>
                </Link>
              </TopCardDynamic>
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
                <Link
                  href={newvideositem.link}
                  title={newvideositem.description}
                >
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
                <Link
                  href={newvideositem.link}
                  title={newvideositem.description}
                >
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
                  <Link
                    key={categoryitem.id}
                    href={categoryitem.link}
                    title={categoryitem.description}
                  >
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
                <Link
                  href={trainingitems.link}
                  title={trainingitems.description}
                >
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
        : typeCards === "category-page-items"
        ? CategoriesItemCard.map((categoriesitemcards) => {
            return (
              <Card
                key={categoriesitemcards.id}
                component="article"
                variant="article"
                sx={{
                  maxWidth: "100%",
                  background: "none",
                  boxShadow: "none",
                  height: { lg: "350px" },
                }}
              >
                <CardActionArea component="div">
                  <picture>
                    <source
                      srcSet={categoriesitemcards.image}
                      type="image/jpg"
                    />
                    <img
                      src={categoriesitemcards.image}
                      alt={categoriesitemcards.alt}
                      style={{width:'100%',height:'200px',objectFit:'contain'}}
                      width={160}
                      height={90}
                    />
                  </picture>
                  <CardContent
                    sx={{ padding: { sm: "16px", xs: "16px", md: "0" } }}
                  >
                    <Typography
                      variant="p"
                      component="p"
                      sx={{
                        fontSize: "16px",
                        height: {
                          xs: "45px",
                          sm: "60px",
                          md: "60px",
                          lg: "50px",
                        },
                        textAlign: "justify",
                        color: "#111010",
                        margin: "5px auto",
                        fontWeight: "400",
                        lineHeight: "1.5",
                        padding: "0 10px",
                      }}
                    >
                      {categoriesitemcards.description}
                    </Typography>
                    <Typography
                      component="p"
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        color: "#00000080",
                      }}
                    >
                      <QueryBuilderRounded
                        sx={{
                          marginBottom: ".5rem",
                          marginRight: "1rem",
                          marginLeft: ".5rem",
                        }}
                      />
                      <Typography
                        component="span"
                        sx={{ width: { sm: "90%", md: "75%", lg: "80%" } }}
                      >
                        تاریخ انتشار : {categoriesitemcards.realsedate}
                      </Typography>
                      <VisibilityRoundedIcon
                        sx={{ marginRight: "1rem", marginLeft: ".5rem" }}
                      />
                      <Typography
                        component="span"
                        sx={{ width: { sm: "90%", md: "75%", lg: "80%" } }}
                      >
                        تعداد بازدید : {categoriesitemcards.view}
                      </Typography>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })
        : null}
    </>
  );
}

'use client'
import { Box, Grid, Skeleton } from "@mui/material";
// import Cards from "../Card/Cards";
import styles from "./MostView.module.css";
import dynamic from "next/dynamic";
const Typography = dynamic(() => import("@mui/material/Typography"), { ssr: false, loading: () => <Skeleton variant="rectangular" animation="wave" />, });
const Card = dynamic(() => import("../Card/Cards"), {
  ssr: false,
  loading: () => <Skeleton variant="rectangular" animation="wave" />,
});
export default function TopCard() {
  return (
    <Grid
      container
      component='section'
      wrap="wrap"
      sx={{ display:'grid' }}
    >
      <Typography
        className={styles.topparagraph}
        component='h2'
        sx={{
          width: "100%",
          padding: { md: "0 2rem", sm: "0" },
          color: "#1B2CC1",
          fontWeight: "900",
        }}
      >
        پربازدیدترین <span className={styles.span}>ویدیو ها</span>{" "}
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
          <Card typeCards='top-pages' />
        </Box>
      </Box>
    </Grid>
  );
}

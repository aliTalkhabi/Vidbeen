"use client";
import styles from "./page.module.css";
import { Box, Container, Skeleton, Stack } from "@mui/material";
import dynamic from "next/dynamic";
import MainContent from "@/components/maincontent/MainContent";

const BoxDynamic = dynamic(() => import("@mui/material/Box"), {
  ssr: false,
  loading: () => {
    <Skeleton animation="wave" variant="rectangular" width={850} />;
  },
});
const SideBarDynamic = dynamic(
  () => import("@/components/rightList/RightList"),
  {
    ssr: false,
    loading: () => (
        <Skeleton
          animation="wave"
          variant="rectangular"
          sx={{width:'250px',height:'195px'}}
        />

    ),
  }
);
const TopCardDynamic = dynamic(() => import("@/components/topCard/Topcard"), {
  ssr: "false",
  loading: () => <Skeleton animation="wave" variant="rectangular" width={850} height={256} />,
});

export default function Home() {
  return (
    <main className={styles.main}>
      <Stack component="section">
        <Container
          component="section"
          sx={{
            display: "grid",
            gridAutoFlow: "column",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr",
              md: "2fr 6fr",
              lg: "1fr 3fr",
            },
            gap: "10px 10px",
            height: "100%",
          }}
        >
          <Box
            component="aside"
            sx={{
              display: { xs: "none", sm: "none", md: "block", lg: "block" },
            }}
          >
            <SideBarDynamic />
          </Box>
          <BoxDynamic
            component="section"
            sx={{
              height: "fit-content",
              width: { xs: "100%", sm: "100%", md: "100%" },
            }}
          >
            <TopCardDynamic />
            <MainContent />
          </BoxDynamic>
        </Container>
      </Stack>
    </main>
  );
}

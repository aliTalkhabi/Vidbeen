"use client";
import styles from "./page.module.css";
import { Container, Skeleton, Stack } from "@mui/material";
import dynamic from "next/dynamic";
import MainContent from "@/components/maincontent/MainContent";

const BoxDynamic = dynamic(() => import("@mui/material/Box"), {
  ssr: false,
  loading: () => {
    <Skeleton animation="wave" variant="rectangular" width={1200} />;
  },
});
const SideBarDynamic = dynamic(
  () => import("@/components/rightList/RightList"),
  {
    ssr: false,
    loading: () => (
      <div>
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={250}
          height={250}
        />
      </div>
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
          
            <SideBarDynamic />
          
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

"use client";
import { Box, Container, Skeleton, Stack } from "@mui/material";
import dynamic from "next/dynamic";


const SideBarDynamic = dynamic(
  () => import("@/components/RightList/RightList"),
  {
    ssr: false,
    loading: () => (
      <Skeleton
        animation="wave"
        variant="rectangular"
        sx={{ width: '250px', height: '195px' }}
      />

    ),
  }
);
const MostViewDynamic = dynamic(() => import("@/components/Mostview/MostView"), {
  ssr: false,
  loading: () => <Skeleton variant="rectangular" animation="wave" />,
});
const MainContentDynamic = dynamic(() => import("@/components/MainContent/MainContent"), {
  ssr: false,
  loading: () => <Skeleton variant="rectangular" animation="wave" sx={{height:'100%'}} />,
});
export default function Home() {
  return (
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
            margin:'0 auto !important'
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
          <Box
            component="section"
            sx={{
              height: "fit-content",
              width: { xs: "100%", sm: "100%", md: "100%" },
            }}
          >
            <MostViewDynamic/>
            <MainContentDynamic />
          </Box>
        </Container>
      
    
  );
}

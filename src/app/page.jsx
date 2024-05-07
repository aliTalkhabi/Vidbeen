'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import { Box, Container, Grid, Skeleton, Stack } from "@mui/material";
import dynamic from "next/dynamic";
import TopCard from "@/components/topCard/Topcard";
const BoxDynamic = dynamic(() => import("@mui/material/Box"), {
  ssr: false,
  loading: () => {
    <Skeleton
      animation="wave"
      variant="rectangular"
      width={1000}
    />
  }

})
const SideBarDynamic = dynamic(() => import("@/components/rightList/RightList"), {
  ssr: false,
  loading: () => (
    <div>
      <Skeleton
        animation="wave"
        variant="rectangular"
      />
    </div>
  ),
});
const ContainerDynamic = dynamic(() => import("@mui/material/Container"), {
  ssr: 'false',
  loading: () => (
    <Skeleton
      animation='wave'
      variant="rectangular"
      width={1200}
      height={300}
    />
  )
})
const TopCardDynamic = dynamic(() => import('@/components/topCard/Topcard'), {
  ssr: 'false',
  loading: () => (
    <Skeleton
      animation='wave'
      variant="rectangular"
    />
  )
})
export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Stack component="section" sx={{ margin: '0 auto', marginTop: { xs: 0, sm: 0, lg: '4rem' } }}>
          <ContainerDynamic component="section" fixed sx={{ display: 'grid', gridAutoFlow: 'column', gridTemplateColumns: { xs: '1fr', sm: '1fr', md: '2fr 6fr', lg: '1fr 3fr' }, gap: '10px 10px', height: '100%' }}>
            <BoxDynamic sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' } }}>
              <SideBarDynamic />
            </BoxDynamic>
            <BoxDynamic sx={{ height: 'fit-content', width: { xs: '100%', sm: '100%', md: '100%' } }}>
              <TopCardDynamic />
              
            </BoxDynamic>
          </ContainerDynamic>
        </Stack>
      </main>
      <Footer />
    </>
  );
}

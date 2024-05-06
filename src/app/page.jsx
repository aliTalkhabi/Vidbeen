'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

import { Box, Container, Grid, Skeleton, Stack } from "@mui/material";
import dynamic from "next/dynamic";
import TopCard from "@/components/topCard/topcard";
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
const SideBarDynamic = dynamic(() => import("@/components/rightList/rightList"), {
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
    />
  )
})
const TopCardDynamic = dynamic(() => import('@/components/topCard/topcard'), {
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
        <Stack sx={{margin:'0 auto',marginTop:'4rem'}}>
          <ContainerDynamic maxWidth='lg' sx={{ display: 'grid', gridAutoFlow: 'column', gridTemplateColumns: '1fr 3fr', gap: '10px 10px' }}>
            <BoxDynamic sx={{ border: '1px solid blue' }}>
              <SideBarDynamic />
            </BoxDynamic>
            <BoxDynamic sx={{ border: '1px solid red' }}>
              <TopCardDynamic />
            </BoxDynamic>
          </ContainerDynamic>
        </Stack>
      </main>
      <Footer />
    </>
  );
}

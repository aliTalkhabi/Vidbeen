import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

import { Container, Grid, Skeleton } from "@mui/material";
import dynamic from "next/dynamic";
import TopCard from "@/components/topCard/topcard";

const SideBarDynamic = dynamic(() => import("@/components/rightList/rightList"), {
  ssr: false,
  loading: () => (
    <div>
      <Skeleton
        animation="wave"
        variant="rectangular"
        sx={{ height: "100vh", marginBottom: "1rem" }}
      />
    </div>
  ),
});
export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Container sx={{display:'grid',gridAutoFlow:'column',gridTemplateColumns:'1fr 3fr',gap:'10px 10px'}}>
          <section style={{ border: '1px solid blue'}}>
            <SideBarDynamic />
          </section>
          <section style={{ border: '1px solid red'}}>
            <TopCard/>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}

import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/Components/header/Header";
import Footer from "@/Components/footer/Footer";
import RightList from "@/Components/rightList/RightList";
import { Container } from "@mui/material";
import dynamic from "next/dynamic";

const SideBarDynamic = dynamic(() => import("@/Components/rightList/RightList"), {
  ssr: false,
  loading: () => (
    <div style={{gridColumn: "2 span" }}>
      <Skeleton
        animation="wave"
        variant="rectangular"
        sx={{ height: "100vh", marginBottom: "1rem"}}
      />
    </div>
  ),
});


export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Container maxWidth="md">
          <section>
            <SideBarDynamic />
          </section>
          <section>

          </section>
        </Container>
      </main>
      <Footer />

    </>
  );
}

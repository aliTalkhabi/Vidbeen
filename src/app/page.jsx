import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

import { Container } from "@mui/material";
import dynamic from "next/dynamic";

const SideBarDynamic = dynamic(() => import("@/components/rightList/rightList"), {
  ssr: false,
  loading: () => (
    <div >
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

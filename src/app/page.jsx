import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import RightList from "@/Components/RightList/RightList";
import { Container } from "@mui/material";
import { Height } from "@mui/icons-material";


export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Container>
          <section>
            <RightList />
          </section>
          <section>

          </section>
        </Container>
      </main>
      <Footer />

    </>
  );
}

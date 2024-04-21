import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";


export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <aside></aside>
      </main>
      <Footer />
      
    </>
  );
}

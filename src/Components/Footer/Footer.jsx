"use client";
import { Skeleton, Typography } from "@mui/material";
import styles from "./Footer.module.css";
import { SocialMediaItems } from "@/constants/constants";
import Link from "next/link";
import dynamic from "next/dynamic";
export default function Footer() {
  const BoxDynamic = dynamic(() => import("@mui/material/Box"), {
    ssr: "false",
    loading: () => (
      <Skeleton
        animation="wave"
        variant="rectangular"
        height={136}
        sx={{ width: "100%" }}
      />
    ),
  });
  return (
    <footer className={styles.footer}>
      <BoxDynamic
        component="section"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr", md: "repeat(3, 1fr)" },
          padding: { md: "1rem 0rem", lg: "1rem 2rem" },
        }}
      >
        <BoxDynamic
          component="section"
          sx={{
            display: "inline-grid",
            gridTemplateColumns: "repeat(5, 1fr)",
          }}
        >
          {SocialMediaItems.map((socialmediaitems) => {
            return (
              <BoxDynamic
                key={socialmediaitems.id}
                component="section"
                sx={{
                  textAlign: "center",
                  marginTop: { xs: "2rem", sm: "2rem", lg: "0" },
                }}
              >
                <Link href={socialmediaitems.link}>
                  {socialmediaitems.icon}
                </Link>
              </BoxDynamic>
            );
          })}
        </BoxDynamic>
        <BoxDynamic component="section">
          <Typography
            sx={{ color: "#fff", margin: "1rem auto", textAlign: "center" }}
          >
            اگر سوالی دارید با ما تماس بگیرید
          </Typography>
          <Typography
            sx={{ color: "#fff", margin: "1rem auto", textAlign: "center" }}
          >
            02172195 - 02177132831-32
          </Typography>
        </BoxDynamic>
        <BoxDynamic component="section">
          <Typography
            sx={{ color: "#fff", margin: "1rem auto", textAlign: "center" }}
          >
            آدرس ما : تهران ، نارمک ، ضلع غربی میدان 47 ، پلاک 8
          </Typography>
          <Typography
            sx={{ color: "#fff", margin: "1rem auto", textAlign: "center" }}
          >
            ساعت کاری ما : شنبه تا چهارشنبه 9 الی 18 - پنجشنبه 9 الی 14
          </Typography>
          <Typography
            sx={{ color: "#fff", margin: "1rem auto", textAlign: "center" }}
          >
            مدیریت سایت : مسلم زمانی
          </Typography>
        </BoxDynamic>
      </BoxDynamic>
    </footer>
  );
}

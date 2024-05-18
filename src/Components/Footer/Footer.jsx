import { Box, Typography } from "@mui/material";
import styles from "./Footer.module.css";
import { SocialMediaItems } from "@/constants/Constants";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Box
        component="section"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr", md: "repeat(3, 1fr)" },
          padding: { md: "1rem 0rem", lg: "1rem 2rem" },
        }}
      >
        <Box
          component="section"
          sx={{
            display: "inline-grid",
            gridTemplateColumns: "repeat(5, 1fr)",
          }}
        >
          {SocialMediaItems.map((socialmediaitems) => {
            return (
              <Box key={socialmediaitems.id}  component="section" sx={{ textAlign: "center" }}>
                <Link href={socialmediaitems.link}>
                  {socialmediaitems.icon}
                </Link>
              </Box>
            );
          })}
        </Box>
        <Box component="section">
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
        </Box>
        <Box component="section">
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
            مدیریت سایت : مسلم زمانی8
          </Typography>
        </Box>
      </Box>
    </footer>
  );
}

"use client";
import { Skeleton, Typography } from "@mui/material";
import styles from "./header.module.css";
import dynamic from "next/dynamic";
import Image from "next/image";
// import Logo from "../../../public/image/logo.png";
import Link from "next/link";

const CategoryIcon = dynamic(
  () => import("@mui/icons-material/GridViewRounded"),
  {
    ssr: false,
    loading: () => <Skeleton variant="circular" width={25} height={25} />,
  }
);
const MagezineIcon = dynamic(
  () => import("@mui/icons-material/AutoStoriesRounded"),
  {
    ssr: false,
    loading: () => <Skeleton variant="circular" width={18} height={18} />,
  }
);
const StoreIcon = dynamic(() => import("@mui/icons-material/StoreRounded"), {
  ssr: false,
  loading: () => <Skeleton variant="circular" width={18} height={18} />,
});
const ParagraphDynamic = dynamic(() => import("@mui/material/Typography"), {
  ssr: false,
  loading: () => (
    <Skeleton
      variant="rectangular"
      height={20}
      sx={{ width: "100%", height: "100%" }}
    />
  ),
});
const ImageDynamic = dynamic(() => import("next/image"), {
  ssr: false,
  loading: () => (
    <Skeleton
      variant="rectangular"
      sx={{ width: "100%", height: "100%" }}
    />
  ),
});
export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <section>
          <ul>
            <li>
              <CategoryIcon
                sx={{ marginLeft: "1rem", color: "#fff", fontSize: "25px" }}
              />
              <ParagraphDynamic>دسته بندی ویدیو</ParagraphDynamic>
            </li>
            <li>
              <MagezineIcon
                sx={{ marginLeft: "1rem", color: "#fff", fontSize: "25px" }}
              />
              <ParagraphDynamic>مجله آموزشی</ParagraphDynamic>
            </li>
            <li>
              <StoreIcon
                sx={{ marginLeft: "1rem", color: "#fff", fontSize: "25px" }}
              />
              <ParagraphDynamic>فروشگاه</ParagraphDynamic>
            </li>
          </ul>
        </section>
        <section>
          <div>
            <Link href="/">
                <picture>
                  <source srcSet='../image/logo.png' type="image/png"/>
                  <img src='../image/logo.png' alt="لگوی ویدبین" width={130} height={50} />
                </picture>
              
            </Link>
          </div>
        </section>
      </nav>
    </header>
  );
}

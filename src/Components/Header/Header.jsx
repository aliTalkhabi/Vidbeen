"use client";
import { Skeleton } from "@mui/material";
import styles from "./header.module.css";
import dynamic from "next/dynamic";
import Link from "next/link";
import MenuTop from "./menu/MenuTop";
import { useEffect, useState } from "react";
import LogoImage from '../../../public/image/logo.png'
import Image from "next/image";

const CategoryIcon = dynamic(
  () => import("@mui/icons-material/GridViewRounded"),
  {
    ssr: false,
    loading: () => (
      <Skeleton animation="pulse" variant="circular" width={25} height={25} />
    ),
  }
);
const MagezineIcon = dynamic(
  () => import("@mui/icons-material/AutoStoriesRounded"),
  {
    ssr: false,
    loading: () => (
      <Skeleton animation="pulse" variant="circular" width={18} height={18} />
    ),
  }
);
const StoreIcon = dynamic(() => import("@mui/icons-material/StoreRounded"), {
  ssr: false,
  loading: () => (
    <Skeleton animation="wave" variant="circular" width={18} height={18} />
  ),
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
const BoxDynamic = dynamic(() => import("@mui/material/Box"), {
  ssr: false,
  loading: () => <Skeleton variant="rectangular" animation="wave"/>,
});
export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <header className={`${styles.header} ${isFixed ? styles.fixed : ""}`}>
      <section>
        <section>
          <ul>
            <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <CategoryIcon
                sx={{ marginLeft: "1rem", color: "#fff", fontSize: "25px" }}
              />
              <ParagraphDynamic>دسته بندی ویدیو</ParagraphDynamic>
              {isHovered && <MenuTop />}
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
            <BoxDynamic>
              <Link href="/">
                <picture>
                  <source srcSet={LogoImage} type="image/png" />
                  <Image
                    src={LogoImage}
                    alt="لگوی ویدبین"
                    width={130}
                    height={50}
                  />
                </picture>
              </Link>
            </BoxDynamic>
          </div>
        </section>
      </section>
    </header >
  );
}

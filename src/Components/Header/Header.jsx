"use client";
import { Skeleton } from "@mui/material";
import styles from "./header.module.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import Logo from "../../../public/image/logo.png";
import Link from "next/link";
import StickyBox from "react-sticky-box";

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
export default function Header() {
  return (
    
      <header  className={styles.header}>
        <nav>
          <section>
            <div>
              <div>
                <CategoryIcon
                  sx={{ marginLeft: "1rem", color: "#fff", fontSize: "25px" }}
                />
                <p>دسته بندی ویدیو</p>
              </div>
              <div>
                <MagezineIcon
                  sx={{ marginLeft: "1rem", color: "#fff", fontSize: "25px" }}
                />
                <p>مجله آموزشی</p>
              </div>
              <div>
                <StoreIcon
                  sx={{ marginLeft: "1rem", color: "#fff", fontSize: "25px" }}
                />
                <p>فروشگاه</p>
              </div>
            </div>
          </section>
          <section>
            <div>
              <Link href="/">
                <Image
                  src={Logo}
                  width={130}
                  height={50}
                  alt="لگوی ویدبین"
                  loading="lazy"
                />
              </Link>
            </div>
          </section>
        </nav>
      </header>
    
  );
}

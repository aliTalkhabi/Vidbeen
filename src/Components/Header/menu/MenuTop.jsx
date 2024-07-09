"use client";
import { Box} from "@mui/material";
import { Fragment, useState } from "react";
import { SubCategories } from "../../../constants/constants";
import Link from "next/link";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import styles from "./MenuTop.module.css";
export default function MenuTop() {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(null);
  const toggleSubMenu = (index) => {
    setIsSubMenuOpen(index);
  };
  
  return (
    <Box
      className={styles.menuNav}
      component="nav"
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "1fr",
          md: "1fr",
          lg: "1.25fr 1fr",
        },
        width: { xs: "80%", sm: "80%", md: "100%", lg: "1200px" },
        height: {xs:'100vh',sm:'100vh',md:'700px'},
        position: "absolute",
        boxShadow:{xs:'rgba(0, 0, 0, 0.25) -100px 0px ',sm:'rgba(0, 0, 0, 0.25) -100px 0px ',md:'none'},
        top:{xs:'3.25rem',sm:'3.25rem',md:'3.5rem'},
        background: "#fff",
        borderRadius: " 0 0 .5rem .5rem",
      }}
    >
      <Box component="section" sx={{ width: "100%" }}>
        
        <ul className={styles.menu}>
          {SubCategories.map((subcategory, i) => {
            return (
              <Fragment key={i}>
                <li key={subcategory.id} className={styles.menuItem}>
                  <Link href={subcategory.link}>{subcategory.title}</Link>
                  {subcategory.subMenu.length > 0 && (
                    <>
                      {isSubMenuOpen == i ? (
                        <KeyboardArrowUpOutlinedIcon
                          sx={{ float: "right", marginTop: "-1rem" }}
                          onClick={() => toggleSubMenu(i)}
                        />
                      ) : (
                        <KeyboardArrowDownOutlinedIcon
                          sx={{ float: "right", marginTop: "-1rem" }}
                          onClick={() => toggleSubMenu(i)}
                        />
                      )}

                      <ul
                        className={`${styles.submenu} ${
                          isSubMenuOpen == i ? styles.open : ""
                        }`}
                      >
                        {subcategory.subMenu.map((subcategorymenu) => {
                          return (
                            <li
                              className={styles.submenuItem}
                              key={subcategorymenu.id}
                            >
                              <a href={subcategorymenu.link}>
                                {subcategorymenu.title}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </>
                  )}
                </li>
              </Fragment>
            );
          })}
        </ul>
      </Box>
      <Box className={styles.imageBox} component="section">
        <picture>
          <source srcSet="../image/next-videos/picture-menu.jpg" />
          <img
            width="700"
            height="400"
            src="../image/next-videos/picture-menu.jpg"
            alt="بنر منو"
          />
        </picture>
      </Box>
    </Box>
  );
}

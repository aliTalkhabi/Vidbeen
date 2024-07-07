"use client";
import { Box, Menu } from "@mui/material";
import { Fragment, useState } from "react";
import { SubCategories } from "../../../constants/constants";
import Link from "next/link";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
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
        border: "1px solid black",
        display: "grid",
        gridTemplateColumns: "1.5fr 1fr",
        width: "1200px",
        height: "700px",
        position: "absolute",
        top: "3.5rem",
        background: "#fff",
        borderRadius: " 0 0 .5rem .5rem",
      }}
    >
      <Box component="section" sx={{ border: "1px solid red" }}>
        <ul className={styles.menu}>
          {SubCategories.map((subcategory, i) => {
            return (
              <Fragment key={i}>
                <li key={subcategory.id} className={styles.menuItem}>
                  <Link href={subcategory.link}>{subcategory.title}</Link>
                  {subcategory.subMenu.length > 0 && (
                    <>
                      <ExpandCircleDownOutlinedIcon onClick={()=>toggleSubMenu(i)} />
                      <ul
                        className={`${styles.submenu}${isSubMenuOpen== i ? "open" : ""}`}
                      >
                        {subcategory.subMenu.map((subcategorymenu) => {
                          return (
                            <li
                              className={styles.submenuItem}
                              key={subcategorymenu.id}
                              href={subcategorymenu.link}
                            >
                              {subcategorymenu.title}
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
      <Box component="section" sx={{ border: "1px solid blue" }}></Box>
    </Box>
  );
}

"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Skeleton,
  Typography,
} from "@mui/material";
import React, { Fragment,use } from "react";
import styles from "./rightlist.module.css";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import Link from "next/link";
import StickyBox from 'react-sticky-box';
import { useApi } from "@/Context/ApiContext";
export default function RightList() {
  const { dataMenu } = useApi()
  if (!dataMenu.length) {
    return (
      <Skeleton animation="wave" variant="text" width={210} height={30} />
    )
  }
  return (
    <Box className={styles.asideContainer}>
      <StickyBox offsetTop={75} offsetBottom={0}>
        {dataMenu.map((item, i) => {
          return (
            // <Fragment key={i}>
            <Accordion
              component="section"
              key={item}
              sx={{
                background: "#fff0",
                border: "none",
                boxShadow: "none",
                padding: "0",
                fontWeight: "700",
              }}
            >
              <AccordionSummary
                component="section"
                sx={{ fontSize: { md: "14px", lg: "16px" } }}
                expandIcon={
                  // rightListItem.subMenu.length > 0 ? (
                  <ArrowDropDownRoundedIcon
                    sx={{
                      color: "#1B2CC1",
                      border: "1px solid #1B2CC1",
                      borderRadius: ".15rem",
                      fontSize: "30px",
                      width: { md: ".5em", lg: ".75em" },
                      height: { md: ".5em", lg: ".75em" },
                      fontWeight: "700",
                    }}
                  />
                  // ) : (
                  //   ""
                  // )
                }
              >
                <Link href='/'>{item}</Link>
              </AccordionSummary>
              {/* {rightListItem.subMenu.length > 0 && (
                  <AccordionDetails
                    component="section"
                    sx={{ padding: "0 1rem" }}
                  >
                    {rightListItem.subMenu.map((subMenuItem) => (
                      <Typography
                        component="section"
                        key={subMenuItem.id}
                        sx={{
                          margin: "1rem 0",
                          listStyleType: "none",
                          fontSize: { md: "12px", lg: "16px" },
                          fontWeight: "700",
                          
                        }}
                      >
                        <Link href={subMenuItem.link}>{subMenuItem.title}</Link>
                      </Typography>
                    ))}
                  </AccordionDetails>
                )} */}
            </Accordion>
            // </Fragment>
          );
        })}

      </StickyBox>
    </Box>
  );
}

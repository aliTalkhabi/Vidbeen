"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Skeleton,
  Typography,
} from "@mui/material";
import React, { Fragment } from "react";
import styles from "./rightlist.module.css";

import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import Link from "next/link";
import { RightListItems } from "@/constants/Constants";
import StickyBox from "react-sticky-box";
import dynamic from "next/dynamic";
const DynamicAccordion = dynamic(() => import("@mui/material/Accordion"), {
  ssr: false,
  loading: () => <Skeleton variant="rectangular" animation="wave" width={285} height={610}/>,
});
export default function RightList() {
  return (
    <section className={styles.asideContainer}>
      <StickyBox offsetTop={70} offsetBottom={2}>
        {RightListItems.map((rightListItem, i) => {
          return (
            <Fragment key={i}>
              <DynamicAccordion
                component="section"
                key={rightListItem.id}
                sx={{
                  background: "#fff0",
                  border: "none",
                  boxShadow: "none",
                  padding: "0",
                }}
              >
                <AccordionSummary
                  component="section"
                  sx={{ fontSize: { md: "14px", lg: "16px" } }}
                  expandIcon={
                    rightListItem.subMenu.length > 0 ? (
                      <ArrowDropDownRoundedIcon
                        sx={{
                          color: "#1B2CC1",
                          border: "1px solid #1B2CC1",
                          borderRadius: ".15rem",
                          fontSize: "30px",
                          width: { md: ".5em", lg: ".75em" },
                          height: { md: ".5em", lg: ".75em" },
                          fontWeight: "700"
                        }}
                      />
                    ) : (
                      ""
                    )
                  }
                >
                  <Link href={rightListItem.link}>{rightListItem.title}</Link>
                </AccordionSummary>
                {rightListItem.subMenu.length > 0 && (
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
                )}
              </DynamicAccordion>
            </Fragment>
          );
        })}
      </StickyBox>
    </section>
  );
}

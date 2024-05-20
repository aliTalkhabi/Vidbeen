'use client'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React, { Fragment, useState } from 'react'
import styles from './rightlist.module.css'

import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import Link from 'next/link';
import { RightListItems } from '@/constants/Constants';
import StickyBox from 'react-sticky-box'


export default function RightList() {
    return (
        <section className={styles.asideContainer}>
            <StickyBox offsetTop={70} offsetBottom={2}>
                {RightListItems.map((rightListItem , i) => {
                    return (
                        <Fragment key={i}>
                        <Accordion component='ul' key={rightListItem.id} sx={{ background: '#fff0', border: 'none', boxShadow: 'none', padding: '0' }}>
                            <AccordionSummary component='li' sx={{fontSize:{md:'14px',lg:'16px'}}} expandIcon={rightListItem.subMenu.length > 0 ? <ArrowDropDownRoundedIcon sx={{color:'#1B2CC1',border:'1px solid #1B2CC1',borderRadius:'.15rem',fontSize:'30px',width:{md:'.5em',lg:'.75em'},height:{md:'.5em',lg:'.75em'}}}/> : ''} >
                                <Link href={rightListItem.link}>{rightListItem.title}</Link>
                            </AccordionSummary>
                            {
                                rightListItem.subMenu.length > 0 && (
                                    <AccordionDetails component='ul' sx={{ padding: '0 1rem' }}>
                                        {rightListItem.subMenu.map((subMenuItem) => (
                                            <Typography component='li' key={subMenuItem.id} sx={{ margin: '1rem 0',fontSize:{md:'12px',lg:'16px'}}}>
                                                <Link href={subMenuItem.link}>{subMenuItem.title}</Link>
                                            </Typography>
                                        ))}
                                    </AccordionDetails>
                                )
                            }
                        </Accordion>
                        </Fragment>
                        )
                })
                }
            </StickyBox>
        </section >
    )
}

'use client'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React, { useState } from 'react'
import styles from './rightlist.module.css'

import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import Link from 'next/link';
import { RightListItems } from '@/constants/constants';
import StickyBox from 'react-sticky-box'


export default function RightList() {
    return (
        <aside className={styles.asideContainer}>
            <StickyBox offsetTop={70} offsetBottom={2}>
                {RightListItems.map(rightListItem => {
                    return (
                        <Accordion key={rightListItem.id} sx={{ background: '#fff0', border: 'none', boxShadow: 'none', padding: '0' }}>
                            <AccordionSummary expandIcon={rightListItem.subMenu.length > 0 ? <ArrowDropDownRoundedIcon sx={{color:'#1B2CC1',border:'1px solid #1B2CC1',borderRadius:'.15rem',fontSize:'30px',width:'.75em',height:'.75em'}}/> : ''} >
                                <Link href={rightListItem.link}>{rightListItem.title}</Link>
                            </AccordionSummary>
                            {
                                rightListItem.subMenu.length > 0 && (
                                    <AccordionDetails sx={{ padding: '0 1rem' }}>
                                        {rightListItem.subMenu.map((subMenuItem) => (
                                            <Typography key={subMenuItem.id} sx={{ margin: '1rem 0' }}>
                                                <Link href={subMenuItem.link}>{subMenuItem.title}</Link>
                                            </Typography>
                                        ))}
                                    </AccordionDetails>
                                )
                            }
                        </Accordion>)
                })
                }
            </StickyBox>
        </aside >
    )
}

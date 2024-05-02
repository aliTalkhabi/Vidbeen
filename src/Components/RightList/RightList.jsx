'use client'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React, { useState } from 'react'
import styles from './rightlist.module.css'
import { ExpandMore, Padding } from '@mui/icons-material'
import Link from 'next/link';
import { RightListItems } from '@/constants/constans';
import StickyBox from 'react-sticky-box'


export default function RightList() {
    return (
        <aside className={styles.asideContainer}>
            <StickyBox offsetTop={70} offsetBottom={2}>
                {RightListItems.map(item => {
                    return (
                        <Accordion sx={{ background: '#fff0', border: 'none', boxShadow: 'none', padding: '0' }}>
                            <AccordionSummary expandIcon={item.subMenu.length > 0 ? <ExpandMore /> : ''} >
                                <Link href={item.link}>{item.title}</Link>
                            </AccordionSummary>
                            {
                                item.subMenu.length > 0 && (
                                    <AccordionDetails sx={{ padding: '0 1rem' }}>
                                        {item.subMenu.map((subMenuItem, i) => (
                                            <Typography key={i} sx={{ margin: '1rem 0' }}>
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

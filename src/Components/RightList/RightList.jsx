import { Accordion, AccordionDetails, AccordionSummary, MenuItem, MenuList } from '@mui/material'
import React from 'react'
import styles from './rightlist.module.css'
import { ExpandMore } from '@mui/icons-material'
import Link from 'next/link'

export default function RightList() {
    return (
        <aside className={styles.contain}>
            <MenuList>
                <Accordion sx={{background:'none',border:'none',boxShadow:'none'}}>
                    <AccordionSummary  expandIcon={<ExpandMore />}>
                        <MenuItem sx={{ padding: '0.5rem 0.25rem' }}>
                            <Link href='/'>دوربین مدار بسته</Link>
                        </MenuItem>
                    </AccordionSummary>
                    <AccordionDetails>
                        <MenuItem sx={{ padding: '0.5rem 0.25rem' }}>
                            <Link href='/'>آیفون تصویری</Link>
                        </MenuItem>
                        <MenuItem sx={{ padding: '0.5rem 0.25rem' }}>
                            <Link href='/'>جک درب پارکینگ</Link>
                        </MenuItem>
                        <MenuItem sx={{ padding: '0.5rem 0.25rem' }}>
                            <Link href='/'>سقف متحرک برقی</Link>
                        </MenuItem>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{background:'none',border:'none',boxShadow:'none'}}>
                    <AccordionSummary  expandIcon={<ExpandMore />}>
                        <MenuItem sx={{ padding: '0.5rem 0.25rem' }}>
                            <Link href='/'>دوربین مدار بسته</Link>
                        </MenuItem>
                    </AccordionSummary>
                    <AccordionDetails>
                        <MenuItem sx={{ padding: '0.5rem 0.25rem' }}>
                            <Link href='/'>آیفون تصویری</Link>
                        </MenuItem>
                        <MenuItem sx={{ padding: '0.5rem 0.25rem' }}>
                            <Link href='/'>جک درب پارکینگ</Link>
                        </MenuItem>
                        <MenuItem sx={{ padding: '0.5rem 0.25rem' }}>
                            <Link href='/'>سقف متحرک برقی</Link>
                        </MenuItem>
                    </AccordionDetails>
                </Accordion>
                <MenuItem sx={{ padding: '0.5rem 0.25rem' }}>
                    <Link href='/'>جک درب پارکینگ</Link>
                </MenuItem>
                <MenuItem sx={{ padding: '0.5rem 0.25rem' }}>
                    <Link href='/'>سقف متحرک برقی</Link>
                </MenuItem>
            </MenuList>
        </aside >
    )
}

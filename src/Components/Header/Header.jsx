'use client'
import { BottomNavigation, BottomNavigationAction, Box, Skeleton } from '@mui/material';
// import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import styles from './header.module.css';
import dynamic from 'next/dynamic';

const CategoryIcon = dynamic(() => import('@mui/icons-material/GridViewRounded'), {
    ssr: false,
    loading: () => (<Skeleton variant='circular' width={25} height={25} />)
});
const MagezineIcon =
    dynamic(() => import('@mui/icons-material/AutoStoriesRounded'), {
        ssr: false,
        loading: () => (<Skeleton variant='circular' width={18} height={18} />)
    });
const StoreIcon = dynamic(() => import('@mui/icons-material/StoreRounded'), {
    ssr: false,
    loading: () => (<Skeleton variant='circular' width={18} height={18} />)
});
export default function Header() {
    return (
        <header className={styles.header}>
            <section>
                <div>
                    <div>
                        <CategoryIcon sx={{ marginLeft: '1rem', color: '#fff', fontSize: '25px' }} />
                        <p>دسته بندی ویدیو</p>
                    </div>
                    <div>
                        <MagezineIcon sx={{ marginLeft: '1rem', color: '#fff', fontSize: '25px' }} />
                        <p>مجله آموزشی</p>
                    </div>
                    <div>
                        <StoreIcon sx={{ marginLeft: '1rem', color: '#fff', fontSize: '25px' }} />
                        <p>فروشگاه</p>
                    </div>
                </div>
            </section>
            <section></section>
        </header>
    )
}
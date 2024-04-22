import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import styles from './header.module.css';


export default function Header() {
    return (
        <header className={styles.header}>
            <section>
                <Box sx={{ width: '70%' ,height:'100%',marginRight:'1rem'}}>
                    <BottomNavigation showLabels sx={{background:'transparent'}}>
                        <BottomNavigationAction label="دسته بندی ویدیو" sx={{color:'#fff',flexDirection:'row'}} icon={<GridViewRoundedIcon sx={{marginLeft:'1rem'}} />} />
                        <BottomNavigationAction label="مجله آموزشی" sx={{color:'#fff',flexDirection:'row'}} icon={<AutoStoriesRoundedIcon sx={{marginLeft:'1rem'}}/>} />
                        <BottomNavigationAction label="فروشگاه" sx={{color:'#fff',flexDirection:'row'}} icon={<StoreRoundedIcon sx={{marginLeft:'1rem'}}/>} />
                    </BottomNavigation>
                </Box>
            </section>
            <section></section>
        </header>
    )
}
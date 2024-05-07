import { Box, Grid, Typography } from "@mui/material";
import Cards from "../card/cards";
import { TopCardsInfo } from "@/constants/constants";
import './topcard.css';

export default function TopCard() {

    return (
        <Grid container wrap="wrap" sx={{ justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Typography className="topparagraph" sx={{ width: '100%', padding: '0 2rem', color: '#1B2CC1', fontWeight: '900' }}>پربازدیدترین <span className="span">ویدیو ها</span> </Typography>
            <Box sx={{width:{xs:'350px',overflowY:'hidden'}}}>
                <Box sx={{ display: "grid", width: { xs: 'max-content', md: '100%' }, gridTemplateColumns: 'repeat(3,1fr)', padding:{xs:'0 .5rem',md:'0 2rem'} , gap: '10px' }}>
                    <Cards dataCards={TopCardsInfo} />
                </Box>
            </Box>
        </Grid>
    )
}
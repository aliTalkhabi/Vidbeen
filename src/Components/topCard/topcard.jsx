import { Grid, Typography } from "@mui/material";
import Cards from "../card/cards";
import { TopCardsInfo } from "@/constants/constants";
import './topcard.css';

export default function TopCard() {
     
    return (
        <Grid container wrap="wrap" sx={{ border: '1px solid green', height: '300px',justifyContent:'space-evenly',alignItems:'center'}}>
            <Typography className="topparagraph" sx={{width:'100%',padding:'0 2rem',color:'#1B2CC1',fontWeight:'900'}}>پربازدیدترین <span className="span">ویدیو ها</span> </Typography>
            <Cards dataCards={TopCardsInfo} />
        </Grid>
    )
}
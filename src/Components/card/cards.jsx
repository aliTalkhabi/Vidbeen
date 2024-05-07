
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import { TopCardsInfo } from "@/constants/constants";
import Link from "next/link";
import { Padding } from "@mui/icons-material";


export default function Cards(dataCards) {
    // console.log(dataCards.title);
    // let result = dataCards;
    // dataCards.map((data ) => {
    //     return data
    // })


    return (
        <>
            {
                TopCardsInfo.map(topcardinfo => {
                    return (
                        <Link key={topcardinfo.id} href={topcardinfo.link}>
                            <Card  sx={{ maxWidth: '240px',height:'100%',background:'none',boxShadow:'none' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component='img'
                                        height='120'
                                        image={topcardinfo.image}
                                        alt={topcardinfo.title}
                                    />
                                    <CardContent sx={{padding:'0'}}>
                                        <Typography  variant="p" component="div" sx={{fontSize:'16px',height:{xs:'45px',sm:'45px',md:'60px'},textAlign:'justify',color:"#111010",margin:'10px auto',fontWeight:'400',lineHeight:'1.5',padding:'0 10px'}}>
                                            {topcardinfo.title}
                                        </Typography>
                                        <Typography variant="span" color="#00000080">
                                            <VisibilityRoundedIcon sx={{float:'left',marginRight:'.5rem'}} /> تعداد بازدید : {topcardinfo.view}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    )
                })
            }

        </>

    )
}
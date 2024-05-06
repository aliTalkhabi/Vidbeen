
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import { TopCardsInfo } from "@/constants/constants";
import Link from "next/link";


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
                            <Card  sx={{ maxWidth: '240px',height:'90%',background:'none',boxShadow:'none' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component='img'
                                        height='120'
                                        image={topcardinfo.image}
                                        alt={topcardinfo.title}
                                    />
                                    <CardContent>
                                        <Typography  variant="p" component="div" sx={{fontSize:'16px',height:'40px',color:"#111010",marginBottom:'1rem',fontWeight:'400',lineHeight:'1.5'}}>
                                            {topcardinfo.title}
                                        </Typography>
                                        <Typography variant="span" color="text.secondary">
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
import { Box, Skeleton } from "@mui/material"
import UnPower from '../../public/image/errors/unpower.png'
import Link from "next/link"
import Image from "next/image";
import dynamic from "next/dynamic";
const BoxDynamic = dynamic(() => import('@mui/material/Box'), { ssr: 'false'})
const Custom404 = () => {
    return (
        <BoxDynamic component='section' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '1rem', overflow: 'hidden', position: 'relative', width:{xs:'95%',sm:'95%',md:'85%'}, height: '600px', margin: '5rem auto', background: 'rgb(13 166 224) 100%', boxShadow: '0 0 8px rgba(0, 0, 0, 0.6)' }}>
            <Box component='section' >
                <Image src={UnPower} priority alt="بنر 404" style={{ height: '100%', width: '100%' }} />
            </Box>
            <Box component='section' sx={{ position: 'absolute', right: '5%', top: '5%', color: '#fff', fontSize: {xs:'1.5rem',sm:'1.5rem',md:'1.5rem',lg:'3rem'} }}>
                <p>ای گمشده ، این راه </p>
                <p>آدرس اشتباه است</p>
            </Box>
            <Box component='section' sx={{ position: 'absolute', bottom: '15%', left: '10%', padding: '1rem', borderRadius: '2.5rem', background: '#fff' }}>
                <Link href="/">
                    <p>بازگشت به صفحه اصلی</p>
                </Link>
            </Box>
        </BoxDynamic>
    )
}
export default Custom404
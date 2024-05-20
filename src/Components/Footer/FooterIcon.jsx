
import { Skeleton } from "@mui/material";
import dynamic from "next/dynamic";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

export default async function FooterIcon({ iconShow }) {
  // const TwitterIcon = dynamic(() => import("@mui/icons-material/Twitter"), {
  //   ssr: false,
  //   loading: () => (
  //     <Skeleton
  //       animation="wave"
  //       variant="circular"
  //       sx={{ width: "1em", height: "1em" }}
  //     />
  //   ),
  //   suspense :true
  // });
  // const FacebookIcon = dynamic(() => import("@mui/icons-material/Facebook"), {
  //   ssr: false,
  //   loading: () => (
  //     <Skeleton
  //       animation="wave"
  //       variant="circular"
  //       sx={{ width: "1em", height: "1em" }}
  //     />
  //   ),
  //   suspense :true
  // });
  // const LinkedInIcon = dynamic(() => import("@mui/icons-material/LinkedIn"), {
  //   ssr: false,
  //   loading: () => (
  //     <Skeleton
  //       animation="wave"
  //       variant="circular"
  //       sx={{ width: "1em", height: "1em" }}
  //     />
  //   ),
  //   suspense :true
  // });
  // const YouTubeIcon = dynamic(() => import("@mui/icons-material/YouTube"), {
  //   ssr: false,
  //   loading: () => (
  //     <Skeleton
  //       animation="wave"
  //       variant="circular"
  //       sx={{ width: "1em", height: "1em" }}
  //     />
  //   ),
  //   suspense :true
  // });
  // const InstagramIcon = dynamic(() => import("@mui/icons-material/Instagram"), {
  //   ssr: false,
  //   loading: () => (
  //     <Skeleton
  //       animation="wave"
  //       variant="circular"
  //       sx={{ width: "1em", height: "1em" }}
  //     />
  //   ),
  //   suspense :true
  // });




  return (
    <>
      {iconShow === "twitter" ? (
        <TwitterIcon />
      ) : iconShow === "facebook" ? (
        <FacebookIcon />
      ) : iconShow === "linkedin" ? (
        <LinkedInIcon />
      ) : iconShow === "youtube" ? (
        <YouTubeIcon />
      ) : iconShow === "instagram" ? (
        <InstagramIcon />
      ) : null}
    </>
  );
}

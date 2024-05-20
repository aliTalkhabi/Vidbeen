import FooterIcon from "@/components/footer/FooterIcon";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import React from "react";

export const RightListItems = [
  {
    id: 101,
    title: "دوربین مدار بسته",
    link: "/cctv",
    subMenu: [
      {
        id: 102,
        title: "دوربین داهوا",
        link: "/cctv/adahua",
      },
      {
        id: 103,
        title: "دوربین بولت",
        link: "/cctv/bullet",
      },
      {
        id: 104,
        title: "دوربین اسپید دام",
        link: "/cctv/dom",
      },
      {
        id: 105,
        title: "دستگاه DVR",
        link: "/cctv/dvr",
      },
    ],
  },
  {
    id: 106,
    title: "آیفون تصویری",
    link: "/videodoorphone",
    subMenu: [
      {
        id: 107,
        title: "سیماران",
        link: "/videodoorphone/simaran",
      },
      {
        id: 108,
        title: "کالیوز",
        link: "/videodoorphone/calluse",
      },
      {
        id: 109,
        title: "تکنما",
        link: "/videodoorphone/taknama",
      },
      {
        id: 110,
        title: "سوزوکی",
        link: "/videodoorphone/suzuki",
      },
    ],
  },
  {
    title: "جک درب پارکینگی",
    link: "/automaticgate",
    subMenu: [],
  },

  {
    title: "کرکره برقی",
    link: "/rolling-shutters",
    subMenu: [],
  },
];
export const TopCardsInfo = [
  {
    id: 111,
    title: "آیفون تصویری تابا 1040M صفحه نمایش 4.3 اینچ",
    image: "/image/taba-1040-video-cover-2.jpg",
    alt: "عکس نارنجی رنگ به همراه آیفون تصویری تابا TVD-1040M200",
    link: "/video-door-phone/taba/taba-1040m",
    view: "193",
  },
  {
    id: 112,
    title: "آیفون تصویری تابا 1043 با حافظه",
    image: "/image/tvd-1043I.jpg",
    alt: "عکس آبی رنگ معرفی آیفون تصویری تابا 1043",
    link: "/video-door-phone/taba/taba-1043",
    view: "131",
  },
  {
    id: 113,
    title: "دوربین آیمو کروزر دوال Imou dual cruiser",
    image: "/image/Imou-dual-cruiser.jpg",
    alt: "عکس دوربین IMou ",
    link: "/cctv/imou-cctv/Imou-dual-cruiser",
    view: "104",
  },
];
export const CategoryItems = [
  {
    id: 114,
    title: "آیفون تصویری",
    image: "/image/branches-banner/taba-1040-video-cover.jpg",
    alt: "بنر نارنجی رنگ به همراه آیفون تصویری تابا TVD-1040M200",
    link: "/video-door-phone/taba/taba-1040m",
    description: "معرفی آیفون تصویری اقتصادی تابا 1040M",
  },
  {
    id: 115,
    title: "دوربین مدار بسته",
    image: "/image/branches-banner/imou-cruiser-video-cover.jpg",
    alt: "بنر نارنجی رنگ معرفی دوربین مدار بسته آیمو مدل cruiser",
    link: "/cctv/imou-cctv/Imou-dual-cruiser",
    description: "معرفی دوربین آیمو با دو لنز مجزا",
  },
  {
    id: 116,
    title: "جک درب پارکینگ",
    image: "/image/branches-banner/automatic-gate-suzuki-sz400.jpg",
    alt: "بنر سبز رنگ نمونه کارکرد جک سوزوکی sz400",
    link: "/automatic-gate/suzuki-sz400",
    description: "معرفی جک پارکینگ سوزوکی sz400",
  },
  {
    id: 117,
    title: "کرکره برقی",
    image: "/image/branches-banner/rolling-shutter-for-windows.jpg",
    alt: "کرکره برقی برای منازل مورد استفاده در گلدان",
    link: "/automatic-gate/suzuki-sz400",
    description: "معرفی ویدویی انواع کرکره برقی",
  },
];
export const NewVideosItems = [
  {
    id: 118,
    image: "/image/new-videos-images/taba-4070-video-cover-2.jpg",
    alt: "عکس صورتی رنگ آیفون تصویری تابا 4070",
    link: "/video-door-phone/taba/taba-4070",
    description: "آیفون تصویری تابا 4070",
  },
  {
    id: 119,
    image: "/image/new-videos-images/73m-simaran.jpg",
    alt: "عکس آبی رنگ معرفی آیفون تصویری تابا HS-73/M200",
    link: "/video-door-phone/simaran/73M",
    description: "آیفون سیماران 73M حافظه دار",
  },
  {
    id: 120,
    image: "/image/new-videos-images/hs-78-m100-wifi.jpg",
    alt: "عکس بنفش رنگ معرفی آیفون تصویری HS-78/M100-Wifi",
    link: "/video-door-phone/simaran/hs-78w",
    description: "آیفون تصویری سیماران Hs-78W وای فای دار",
  },
  {
    id: 121,
    image: "/image/new-videos-images/simaran-46tkm.jpg",
    alt: "عکس آبی و سیاه آیفون تصویری سیماران HS-46TKM",
    link: "/video-door-phone/simaran/46tkm",
    description: "آیفون تصویری سیماران Hs-46TKM",
  },
  {
    id: 122,
    image: "/image/new-videos-images/simaran-hs-43tkm100-video-cover.jpg",
    alt: " HS-43TKM100 عکس معرفی آیفون تصویری سیماران",
    link: "/video-door-phone/simaran/hs-43tkm",
    description: "آیفون تصویری سیماران Hs-43TKM",
  },
];
export const TrainingItems = [
  {
    id: 123,
    image: "/image/training-images/tvd-1090-m200.jpg",
    alt: "عکس قرمز رنگ معرفی آیفون تصویری تابا مدل 1090",
    link: "/video-door-phone/taba/1090m",
    description: "آیفون تصویری تابا 1090",
  },
  {
    id: 124,
    image: "/image/training-images/hs-72tk-m100.jpg",
    alt: "عکس آبی رنگ آیفون تصویری سیماران مدل HS-72TK/M100",
    link: "/video-door-phone/simaran/hs-43tkm",
    description: "آیفون تصویری Hs-72TKM سیماران",
  },
  {
    id: 125,
    image: "/image/training-images/taba-4070-video-cover-2.jpg",
    alt: "کارت معرفی آموزش آیفون تصویری تابا",
    link: "/video-door-phone/taba/taba-4070m",
    description: "آیفون تصویری تابا 4070M",
  },
];



import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Skeleton } from "@mui/material";
import dynamic from "next/dynamic";


const TwitterIcon = dynamic(() => import("@mui/icons-material/Twitter"), {
  ssr: false,
  loading: () => (
    <Skeleton
      animation="wave"
      variant="circular"
      sx={{ width: "1em", height: "1em" }}
    />
  ),
  suspense :true
});

export const SocialMediaItems = [
  {
    id: 126,
    link: "/",
    icon: <TwitterIcon iconShow="twitter" />,
  },
  {
    id: 127,
    link: "/",
    icon: <FacebookIcon iconShow="facebook" />,
  },
  {
    id: 128,
    link: "/",
    icon: <LinkedInIcon iconShow="linkedin" />,
  },
  {
    id: 129,
    link: "/",
    icon: <YouTubeIcon iconShow="youtube" />,
  },
  {
    id: 130,
    link: "/",
    icon: <InstagramIcon iconShow="instagram" />,
  },
];

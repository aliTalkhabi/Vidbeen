import { Description } from '@mui/icons-material'
import React from 'react'

export const RightListItems = [
    {
        id: 101,
        title: 'دوربین مدار بسته',
        link: '/cctv',
        subMenu: [
            {
                id: 102,
                title: 'دوربین داهوا',
                link: '/cctv/adahua',
            },
            {
                id: 103,
                title: 'دوربین بولت',
                link: '/cctv/bullet'
            },
            {
                id: 104,
                title: 'دوربین اسپید دام',
                link: '/cctv/dom'
            },
            {
                id: 105,
                title: 'دستگاه DVR',
                link: '/cctv/dvr'
            }
        ]
    },
    {
        id: 106,
        title: 'آیفون تصویری',
        link: '/videodoorphone',
        subMenu: [
            {
                id: 107,
                title: 'سیماران',
                link: '/videodoorphone/simaran',
            },
            {
                id: 108,
                title: 'کالیوز',
                link: '/videodoorphone/calluse'
            },
            {
                id: 109,
                title: 'تکنما',
                link: '/videodoorphone/taknama'
            },
            {
                id: 110,
                title: 'سوزوکی',
                link: '/videodoorphone/suzuki'
            }
        ]
    },
    {
        title: 'جک درب پارکینگی',
        link: '/automaticgate',
        subMenu: []
    },

    {
        title: 'کرکره برقی',
        link: '/rolling-shutters',
        subMenu: []
    },
]
export const TopCardsInfo = [
    {
        id: 111,
        title: 'آیفون تصویری تابا 1040M صفحه نمایش 4.3 اینچ',
        image: '/image/taba-1040-video-cover-2.jpg',
        link: '/video-door-phone/taba/taba-1040m',
        view: '193'
    },
    {
        id: 112,
        title: 'آیفون تصویری تابا 1043 با حافظه',
        image: '/image/tvd-1043I.jpg',
        link: '/video-door-phone/taba/taba-1043',
        view: '131'
    },
    {
        id: 113,
        title: 'دوربین آیمو کروزر دوال Imou dual cruiser',
        image: '/image/Imou-dual-cruiser.jpg',
        link: '/cctv/imou-cctv/Imou-dual-cruiser',
        view: '104'
    }
]
export const SampleBranchItems = [
    {
        id: 114,
        title: 'آیفون تصویری',
        image: '/images/branches-banner/taba-1040-video-cover.jpg',
        link: '/video-door-phone/taba/taba-1040m',
        description: 'معرفی آیفون تصویری اقتصادی تابا 1040M'
    }, {
        id: 115,
        title: 'دوربین مدار بسته',
        image: '/images/branches-banner/imou-cruiser-video-cover.jpg',
        link: '/cctv/imou-cctv/Imou-dual-cruiser',
        description: 'معرفی دوربین آیمو با دو لنز مجزا'
    }, {
        id: 116,
        title: 'جک درب پارکینگ',
        image: '/images/branches-banner/automatic-gate-suzuki-sz400.jpg',
        link: '/automatic-gate/suzuki-sz400',
        description: 'معرفی جک پارکینگ سوزوکی sz400'
    }, {
        id: 117,
        title: 'کرکره برقی',
        image: '/images/branches-banner/automatic-gate-suzuki-sz400.jpg',
        link: '/automatic-gate/suzuki-sz400',
        description: 'معرفی جک پارکینگ سوزوکی sz400'
    }
]
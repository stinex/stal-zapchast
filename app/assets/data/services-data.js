import ImgOne from '../images/home/services-one.png'
import ImgTwo from '../images/home/services-two.png'
import ImgThree from '../images/home/services-three.png'
import ImgFour from '../images/home/services-four.png'
import ImgFive from '../images/home/services-five.png'
import ImgSix from '../images/home/services-six.png'

import tokarnoFrezernyeBg1920 from '../images/services/tokarno-frezernye-bg-1920.png'
import tokarnoFrezernyeBg768 from '../images/services/tokarno-frezernye-bg-768.png'
import tokarnoFrezernyeBg375 from '../images/services/tokarno-frezernye-bg-375.png'
import tokarnoFrezernye1 from '../images/services/tokarno-frezernye-1.png'
import tokarnoFrezernye2 from '../images/services/tokarno-frezernye-2.png'
import tokarnoFrezernye3 from '../images/services/tokarno-frezernye-3.png'
import tokarnoFrezernye4 from '../images/services/tokarno-frezernye-4.png'
import tokarnoFrezernye5 from '../images/services/tokarno-frezernye-5.png'

import tokarnoRezkaBg1920 from '../images/services/rezka-bg-1920.png'
import tokarnoRezkaBg768 from '../images/services/rezka-bg-768.png'
import tokarnoRezkaBg375 from '../images/services/rezka-bg-375.png'
import tokarnoRezka1 from '../images/services/rezka-1.png'
import tokarnoRezka2 from '../images/services/rezka-2.png'
import tokarnoRezka3 from '../images/services/rezka-3.png'
import tokarnoRezka4 from '../images/services/rezka-4.png'

import lite110g113lBg1920 from '../images/services/lite-110g113l-bg-1920.png'
import lite110g113lBg768 from '../images/services/lite-110g113l-bg-768.png'
import lite110g113lBg375 from '../images/services/lite-110g113l-bg-375.png'
import lite110g113lRezka1 from '../images/services/lite-110g113l-1.png'
import lite110g113lRezka2 from '../images/services/lite-110g113l-2.png'
import lite110g113lRezka3 from '../images/services/lite-110g113l-3.png'
import lite110g113lRezka4 from '../images/services/lite-110g113l-4.png'
import lite110g113lRezka5 from '../images/services/lite-110g113l-5.png'

export const services = [
    {
        link: 'tokarno-frezernye',
        img: ImgOne,
        name: 'Токарно-фрезерные',
        fullName: 'Токарно-фрезерная обработка металла',
        bg: {
            '1920': tokarnoFrezernyeBg1920,
            '768': tokarnoFrezernyeBg768,
            '375': tokarnoFrezernyeBg375,
        },
        images: [
            tokarnoFrezernye1,
            tokarnoFrezernye2,
            tokarnoFrezernye3,
            tokarnoFrezernye4,
            tokarnoFrezernye5,
        ]
    },
    {
        link: 'rezka',
        img: ImgTwo,
        name: 'Резка',
        fullName: 'Резка',
        bg: {
            '1920': tokarnoRezkaBg1920,
            '768': tokarnoRezkaBg768,
            '375': tokarnoRezkaBg375,
        },
        images: [
            tokarnoRezka1,
            tokarnoRezka2,
            tokarnoRezka3,
            tokarnoRezka4,
        ]
    },
    {
        link: 'svarochnye',
        img: ImgThree,
        name: 'Сварочные',
        fullName: 'Сварочные работы',
    },
    {
        link: 'lite-110g113l',
        img: ImgFour,
        name: 'Литье 110Г113Л',
        fullName: 'Литье 110Г113Л',
        bg: {
            '1920': lite110g113lBg1920,
            '768': lite110g113lBg768,
            '375': lite110g113lBg375,
        },
        images: [
            lite110g113lRezka1,
            lite110g113lRezka2,
            lite110g113lRezka3,
            lite110g113lRezka4,
            lite110g113lRezka5,
        ]
    },
    {
        link: 'izgotovlenie-nozhej',
        img: ImgFive,
        name: 'Изготовление ножей',
        fullName: 'Изготовление ножейа',
    },
    {
        link: 'kryuki-kranovye',
        img: ImgSix,
        name: 'Крюки крановые',
        fullName: 'Крюки',
    },
]
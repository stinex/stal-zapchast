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
            tokarnoFrezernye5
        ]
    },
    {
        link: 'rezka',
        img: ImgTwo,
        name: 'Резка',
        fullName: 'Резка',
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
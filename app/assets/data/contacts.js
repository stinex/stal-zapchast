import Location from "../images/svg/Location"
import Mail from "../images/svg/Mail"
import PhoneContacts from "../images/svg/PhoneContacts"

import IconTelegram from '../images/telegram.png'
import IconWhatsapp from '../images/whatsapp.png'

export const contacts = [
    {
        name: 'Адрес',
        text: 'г. Челябинск, ул. Российская 59a/14',
        link: 'https://yandex.ru/maps/-/CCUvjCh8OD',
        icon: <Location />,
        type: 'address',
    },
    {
        name: 'Телефон',
        text: [
            {
                number: '+7 (996) 233-41-51',
                link: '+79962334151',
                icon: IconTelegram,
                type: 'telegram'
            },
            {
                number: '+7 (982) 292-09-50',
                link: '+79822920950',
                icon: IconWhatsapp,
                type: 'whatsapp'
            }],
        icon: <PhoneContacts />,
        type: 'phone',
    },
    {
        name: 'Email',
        text: 'detal-174@mail.ru',
        icon: <Mail />,
        type: 'email',
    },
]
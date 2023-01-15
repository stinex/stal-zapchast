import Location from "../images/svg/Location"
import Mail from "../images/svg/Mail"
import PhoneContacts from "../images/svg/PhoneContacts"

export const contacts = [
    {
        name: 'Адрес',
        text: 'г. Челябинск, ул. Российская 59a\\14',
        link: 'https://yandex.ru/maps/-/CCUvjCh8OD',
        icon: <Location />,
        type: 'address',
    },
    {
        name: 'Телефон',
        text: '+7 (996) 233-41-51',
        icon: <PhoneContacts/>,
        type: 'phone',
    },
    {
        name: 'Email',
        text: 'zapchast_174@bk.ru',
        icon: <Mail />,
        type: 'email',
    },
]
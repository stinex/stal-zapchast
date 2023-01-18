import Link from 'next/link'

import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import styles from './Contacts.module.scss'

import { contacts } from '../../assets/data/contacts'

const Contacts = () => {
    return (
        <div className={styles.contacts_wrapper}>
            <div className={styles.main_block}>
                <div className="container">
                    <div className={styles.information}>
                        <div className={styles.information_wrapper}>
                            <Breadcrumbs page={'Контакты'} theme={'dark'} />
                            <h2 className={styles.title}>
                                Контакты
                            </h2>
                            <p className={styles.description}>
                                Свяжитесь с нами по телефону и мы ответим на все интересующие вас вопросы
                            </p>

                            <div className={styles.btn_order}>
                                Заказать звонок
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className={styles.body}>
                    <div className={styles.info}>
                        <div className={styles.title}>
                            Наши контакты:
                        </div>
                        <nav className={styles.contacts}>
                            <ul>
                                {
                                    contacts.map(item => {
                                        return (
                                            <li key={item.text} className={styles.item}>
                                                <span className={styles.icon}>
                                                    {item.icon}
                                                </span>
                                                <Link type={item.type} href={item.type === 'phone' ?
                                                    "tel:" + item.text : item.type === 'email' ? "mailto:" + item.text :
                                                        item.type === 'address' ? item?.link : item.text}>
                                                    {item.text}
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </nav>
                    </div>
                    <div className={styles.map}>
                        <iframe src="https://yandex.ru/map-widget/v1/-/CCUvjLTI-C" style={{ width: "100%", height: "460px" }} allowFullScreen frameBorder="0" rel="border:0" loading="lazy" >
                        </iframe>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contacts
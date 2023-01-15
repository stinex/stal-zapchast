import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
import Logo from '../../assets/images/svg/Logo'
import styles from './Footer.module.scss'

import { contacts } from '../../assets/data/contacts'
import { menu } from '../../assets/data/menu-data'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className="container">
                <div className={styles.footer_wrapper}>
                    <Link href="/" className={styles.logo}>
                        <Logo />
                        СтальЗапчасть
                    </Link>
                    <div className={styles.menu}>
                        <ul>
                            {menu.map(item => {
                                if (item.link === 'contacts' || item.link === '/') {
                                    return (
                                        <li key={item.link}>
                                            <Link href={item.link} className={item.link === '/' ? `${styles.link} ${styles.main}` : styles.link}>
                                                {item.name}
                                            </Link>
                                        </li>
                                    )
                                } else {
                                    return (
                                        <li key={item.link}>
                                            <ScrollLink to={item.link} smooth={true} className={item.link === '/' ? `${styles.link} ${styles.main}` : styles.link}>
                                                {item.name}
                                            </ScrollLink>
                                        </li>
                                    )
                                }
                            })}
                        </ul>
                    </div>
                    <nav className={styles.contacts}>
                        <ul>
                            <li className={`${styles.text} ${styles.main}`}>
                                {menu.map(item => {
                                    if (item.link === 'contacts')
                                        return (
                                            <Link href={item.link} key={item.link}>
                                                {item.name}
                                            </Link>
                                        )
                                })}
                            </li>
                            {
                                contacts.map(item => {
                                    return (
                                        <li key={item.text} className={styles.text}>
                                            <span>
                                                {item.name}:
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
                    <div className={styles.reserved}>© Все права защищены</div>
                </div>
            </div>
        </div>
    )
}
export default Footer
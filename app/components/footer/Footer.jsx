import Link from 'next/link'
import Image from "next/image"
import { useRouter } from 'next/router'
import { Link as ScrollLink } from 'react-scroll'
import Logo from '../../assets/images/svg/Logo'
import styles from './Footer.module.scss'

import { contacts } from '../../assets/data/contacts'
import { menu } from '../../assets/data/menu-data'

const Footer = () => {
    const router = useRouter()
    return (
        <div className={styles.footer}>
            <div className="container">
                <div className={styles.footer_wrapper}>
                    <Link href="/" className={styles.logo}>
                        <Logo />
                        МеталлДеталь
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
                                } else if (router.route === '/') {
                                    return (
                                        <li key={item.link}>
                                            <ScrollLink href="#" to={item.link} smooth={true} className={item.link === '/' ? `${styles.link} ${styles.main}` : styles.link}>
                                                {item.name}
                                            </ScrollLink>
                                        </li>
                                    )
                                } else {
                                    return (
                                        <li key={item.link}>
                                            <Link href={`/#${item.link}`} className={item.link === '/' ? `${styles.link} ${styles.main}` : styles.link}>
                                                {item.name}
                                            </Link>
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
                                    if (item.type === 'phone') {
                                        return (
                                            <li key={item.text} className={styles.text}>
                                                <span>
                                                    {item.name}:
                                                </span>
                                                <span>
                                                    {
                                                        item.text.map((phone, i) => {
                                                            return (
                                                                <Link key={i} type={item.type} href={"tel:" + phone.number}>
                                                                    {phone.number}
                                                                </Link>
                                                            )
                                                        })
                                                    }
                                                </span>
                                            </li>
                                        )
                                    } else {
                                        return (
                                            <li key={item.text} className={styles.text}>
                                                <span>
                                                    {item.name}:
                                                </span>
                                                <Link type={item.type} href={item.type === 'email' ? "mailto:" + item.text :
                                                    item.type === 'address' ? item?.link : item.text}>
                                                    {item.text}
                                                </Link>
                                            </li>
                                        )
                                    }
                                })
                            }
                        </ul>
                    </nav>
                    <nav className={styles.social}>
                        <div className={styles.social_head}>
                            Написать нам:
                        </div>
                        <div className={styles.socials}>
                            {
                                contacts.map(item => {
                                    if (item.type === 'phone') {
                                        return (
                                            item.text.map((phone, i) => {
                                                return (
                                                    <Link key={i} type={item.type} href={phone.type === 'telegram' ? ` https://telegram.me/${phone.link}` : `https://wa.me/${phone.link}`}>
                                                        <Image src={phone.icon} />
                                                    </Link>
                                                )
                                            })
                                        )
                                    }
                                })
                            }
                        </div>
                    </nav>
                    <div className={styles.reserved}>© Все права защищены</div>
                    <div className={styles.dev}>design by <a href="https://t.me/tatiaparina" target='_blonk'>@tatiaparina</a> & dev by <a href="https://t.me/vladislav_27" target='_blonk'>@vladislav_27</a></div>
                </div>
            </div>
        </div>
    )
}
export default Footer
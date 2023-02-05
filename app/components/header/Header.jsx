import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { contacts } from '../../assets/data/contacts'
import Logo from '../../assets/images/svg/Logo'
import Phone from '../../assets/images/svg/Phone'
import styles from './Header.module.scss'
import MenuBurger from './menu-burger/MenuBurger'
import Menu from './menu/Menu'

const Header = () => {

    const [menuShow, setMenuShow] = useState(false)
    const router = useRouter()

    return (
        <div className={`${styles.header} ${router.route === '/services/[name]' ? styles.white : router.route === '/' ? styles.white_index : ''}`}>
            <div className="container" >
                <div className={styles.header_wrapper}>
                    <Link href="/" className={styles.logo}>
                        <Logo />
                        МеталлДеталь
                    </Link>
                    <Menu location='header' />
                    <div className={styles.phone}>
                        <Phone />
                        <span>
                            {contacts.map(item => {
                                if (item.type === 'phone') {
                                    return (
                                        <span key={item.type}>
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
                                    )
                                }
                            })}
                        </span>
                    </div>
                    <div className={styles.burger_menu} onClick={() => setMenuShow(true)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <MenuBurger menuShow={menuShow} onRequestCloseMenu={() => setMenuShow(false)} />
        </div>
    )
}

export default Header
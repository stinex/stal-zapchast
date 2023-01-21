import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Logo from '../../assets/images/svg/Logo'
import Phone from '../../assets/images/svg/Phone'
import styles from './Header.module.scss'
import MenuBurger from './menu-burger/MenuBurger'
import Menu from './menu/Menu'

const Header = () => {

    const [menuShow, setMenuShow] = useState(false)
    const router = useRouter()

    return (
        <div className={`${styles.header} ${router.route === '/services/[name]' ? styles.white :  router.route === '/' ? styles.white_index :''}`}>
            <div className="container" >
                <div className={styles.header_wrapper}>
                    <Link href="/" className={styles.logo}>
                        <Logo />
                        СтальЗапчасть
                    </Link>
                    <Menu location='header' />
                    <Link href="tel:+7(996)233-41-51" className={styles.phone}>
                        <Phone />
                        +7 (996) 233-41-51
                    </Link>
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
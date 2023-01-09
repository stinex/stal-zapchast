import Logo from '../../assets/images/svg/Logo'
import Phone from '../../assets/images/svg/Phone'
import styles from './Header.module.scss'
import Menu from './menu/Menu'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className="container">
                <div className={styles.header_wrapper}>
                    <a href="/" className={styles.logo}>
                        <Logo />
                        СтальЗапчасть
                    </a>
                    <Menu />
                    <a href="tel:+7(996)233-41-51" className={styles.phone}>
                        <Phone />
                        +7 (996) 233-41-51
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header
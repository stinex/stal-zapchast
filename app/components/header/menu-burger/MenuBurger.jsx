import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'

import { ModalContext } from '../../modal/ModalContext'
import { menu } from '../../../assets/data/menu-data'

import CloseMenu from '../../../assets/images/svg/CloseMenu'
import Logo from '../../../assets/images/svg/Logo'

import styles from './MenuBurger.module.scss'
import ControlledModal from '../../modal/ControlledModal'
import Form from '../../form/Form'


const MenuBurger = ({ menuShow, onRequestCloseMenu }) => {

    const router = useRouter()
    const { setShouldShowModalTwo, shouldShowModalTwo } = useContext(ModalContext)

    useEffect(() => {
        menuShow ? document.body.classList.add('body-hidden') : document.body.classList.remove('body-hidden')
    }, [menuShow])

    return (
        <div className={`${styles.menu_burger} ${menuShow ? styles.open : ''}`}>
            <div className="container">
                <div className={styles.menu_burger__wrapper}>
                    <div className={styles.header}>
                        <Link href="/" className={styles.logo}>
                            <Logo />
                            СтальЗапчасть
                        </Link>
                        <div className={styles.close} onClick={onRequestCloseMenu}>
                            <CloseMenu />
                        </div>
                    </div>
                    <div className={styles.body}>
                        <ul>
                            {menu.map(item => {
                                if (item.link === 'contacts' || item.link === '/') {
                                    return (
                                        <li key={item.link}>
                                            <Link href={item.link === '/' ? `${item.link}` : `/${item.link}`} className={item.link === '/' ? `${styles.link} ${styles.main}` : styles.link} onClick={onRequestCloseMenu}>
                                                {item.name}
                                            </Link>
                                        </li>
                                    )
                                } else if (router.route === '/') {
                                    return (
                                        <li key={item.link}>
                                            <ScrollLink to={item.link} smooth={true} className={item.link === '/' ? `${styles.link} ${styles.main}` : styles.link} onClick={onRequestCloseMenu}>
                                                {item.name}
                                            </ScrollLink>
                                        </li>
                                    )
                                } else {
                                    return (
                                        <li key={item.link}>
                                            <Link href={`/#${item.link}`} className={item.link === '/' ? `${styles.link} ${styles.main}` : styles.link} onClick={onRequestCloseMenu}>
                                                {item.name}
                                            </Link>
                                        </li>
                                    )
                                }
                            })}
                        </ul>
                        <div className={styles.btn_order} onClick={() => setShouldShowModalTwo(!shouldShowModalTwo)}>
                            Заказать звонок
                        </div>
                    </div>
                    <div className={styles.footer}>
                        © МеталлДеталь.Все права защищены
                    </div>
                </div>
            </div>

            <ControlledModal
                shouldShow={shouldShowModalTwo}
                onRequestClose={() => setShouldShowModalTwo(false)}
            >
                <Form title={`Заполните форму \nдля получения расчета стоимости`} type='requestСall' />
            </ControlledModal>
        </div>
    )
}
export default MenuBurger
import { useRouter } from 'next/router'

import MenuItem from './menu-item/MenuItem'
import styles from './Menu.module.scss'
import { menu } from '../../../assets/data/menu-data.js'

const Menu = ({ location }) => {
    const router = useRouter()
    return (
        <nav className={`${styles.menu} ${router.route === '/services/[name]' ? styles.white : ''}`}>
            <ul>
                {menu?.map(item => (location === 'header' && item.link === '/' ? '' : <MenuItem key={item.link} item={item} />))}
            </ul>
        </nav>
    )
}
export default Menu
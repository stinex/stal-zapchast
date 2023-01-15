
import MenuItem from './menu-item/MenuItem'
import styles from './Menu.module.scss'
import { menu } from '../../../assets/data/menu-data.js'

const Menu = ({ location }) => {
    return (
        <nav className={styles.menu}>
            <ul>
                {menu?.map(item => (location === 'header' && item.link === '/' ? '' : <MenuItem key={item.link} item={item} />))}
            </ul>
        </nav>
    )
}
export default Menu